pipeline {

  options {
    buildDiscarder(logRotator(daysToKeepStr: '7'))
  }

  agent any

  environment {
    S3BUCKET = 's3://cerity-ci-artifacts'
  }

  stages {

    stage('Prepare Build') {
      steps {
        script {
          // calculate GIT lastest commit short-hash
          gitCommitHash = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
          shortCommitHash = gitCommitHash.take(7)

          // calculate a sample version tag
          VERSION = shortCommitHash

          // set the build display name
          currentBuild.displayName = "#${BUILD_ID}-${VERSION}"
        }
      }
    } // end Prepare Build stage

    stage('Build') {
      steps {
        container('nodejs') {

          // get package name and version
          script {
            PKGNAME = sh(returnStdout: true, script: 'jq -r .name package.json').trim()
            PKGVERSION = sh(returnStdout: true, script: 'jq -r .version package.json').trim()
          }

          // package the app
          sh("npm pack ${PKGNAME}")
        }
      }
    }

    stage('Publish') {
      steps {
        container('docker') {
          sh("ls -la ${PKGNAME}-${PKGVERSION}.tgz")

          // sh("aws s3 sync --region "$S3REGION" \
          //       --acl public-read \
          //       --cache-control "public, max-age=315360000, immutable" \
          //       package/ \
          //       "$S3PATH/$PKGNAME/$PKGVERSION/"")
        }
      }
    }

  } // end stages
}
