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
          script {
            PKGNAME = sh(returnStdout: true, script: 'jq -r .name package.json').trim()

            // package the app
            sh("npm pack ${PKGNAME}")
          }
        }
      }

      post {
        success {
          archiveArtifacts(artifacts: '**/*.tgz', fingerprint: true, allowEmptyArchive: true)
        }
      }
    }

    stage('Publish') {
      steps {        
        container('docker') {
          script {
            // get package artifact
            ARTIFACT = sh(returnStdout: true, script: "ls -la ${PKGNAME}-*.tgz").trim()

            // push to s3 bucket
            sh("aws s3 sync $ARTIFACT $S3BUCKET/npm/$PKGNAME/$ARTIFACT/")
          }
        }
      }
    }

  } // end stages
}
