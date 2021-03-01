let redirections = {
    // "/SOURCE (BROKEN) URL without trailing slash":"/DESTINATION (CORRECT) URL with slash"
 
    "/learn/tools-ides/setting-up-visual-studio-code":"/learn/vscode-plugin/",
    "/learn/setting-up-visual-studio-code":"/learn/vscode-plugin/",
     "/1.1/learn/tools-ides/setting-up-visual-studio-code":"/1.1/learn/vscode-plugin/",
    "/1.1/learn/setting-up-visual-studio-code":"/1.1/learn/vscode-plugin/",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code":"/1.0/learn/vscode-plugin/",
    "/1.0/learn/setting-up-visual-studio-code":"/1.0/learn/vscode-plugin/",
    "/learn/setting-up-visual-studio-code/language-intelligence":"/learn/vscode-plugin/language-intelligence/",
    "/learn/tools-ides/setting-up-visual-studio-code/language-intelligence":"/learn/vscode-plugin/language-intelligence/",
    "/1.1/learn/setting-up-visual-studio-code/language-intelligence":"/1.1/learn/vscode-plugin/language-intelligence/",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/language-intelligence":"/1.1/learn/vscode-plugin/language-intelligence/",
    "/1.0/learn/setting-up-visual-studio-code/language-intelligence/":"/1.0/learn/vscode-plugin/language-intelligence",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/language-intelligence/":"/1.0/learn/vscode-plugin/language-intelligence",
    "/learn/setting-up-visual-studio-code/run-and-debug":"/learn/vscode-plugin/run-and-debug/",
    "/learn/tools-ides/setting-up-visual-studio-code/run-and-debug":"/learn/vscode-plugin/run-and-debug/",
    "/1.1/learn/setting-up-visual-studio-code/run-and-debug":"/1.1/learn/vscode-plugin/run-and-debug/",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/run-and-debug":"/1.1/learn/vscode-plugin/run-and-debug/",
    "/1.0/learn/setting-up-visual-studio-code/run-and-debug/":"/1.0/learn/vscode-plugin/run-and-debug",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/run-and-debug/":"/1.0/learn/vscode-plugin/run-and-debug",
    "/1.1/learn/setting-up-visual-studio-code/graphical-editor":"/1.1/learn/vscode-plugin/graphical-editor/",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/graphical-editor":"/1.1/learn/vscode-plugin/graphical-editor/",
    "/1.0/learn/setting-up-visual-studio-code/graphical-editor/":"/1.0/learn/setting-up-visual-studio-code/graphical-editor",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/graphical-editor/":"/1.0/learn/vscode-plugin/graphical-editor",
    "/1.1/learn/setting-up-visual-studio-code/graphical-editor":"/1.1/learn/vscode-plugin/graphical-editor/",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/graphical-editor":"/1.1/learn/vscode-plugin/graphical-editor/",
    "/1.0/learn/setting-up-visual-studio-code/graphical-editor/":"/1.0/learn/vscode-plugin/graphical-editor",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/graphical-editor/":"/1.0/learn/vscode-plugin/graphical-editor",
    "/learn/setting-up-visual-studio-code/documentation-viewer":"/learn/vscode-plugin/documentation-viewer/",
    "/learn/tools-ides/setting-up-visual-studio-code/documentation-viewer":"/learn/vscode-plugin/documentation-viewer/",
    "/1.1/learn/setting-up-visual-studio-code/documentation-viewer":"/1.1/learn/vscode-plugin/documentation-viewer/",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/documentation-viewer":"/1.1/learn/vscode-plugin/documentation-viewer/",
    "/1.0/learn/setting-up-visual-studio-code/documentation-viewer/":"/1.0/learn/vscode-plugin/documentation-viewer",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/documentation-viewer/":"/1.0/learn/vscode-plugin/documentation-viewer",
    "/learn/setting-up-visual-studio-code/run-all-tests":"/learn/vscode-plugin/run-all-tests/",
    "/learn/tools-ides/setting-up-visual-studio-code/run-all-tests":"/learn/vscode-plugin/run-all-tests/",
    "/1.1/learn/setting-up-visual-studio-code/run-all-tests":"/1.1/learn/vscode-plugin/run-all-tests/",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/run-all-tests":"/1.1/learn/vscode-plugin/run-all-tests/",
    "/1.0/learn/setting-up-visual-studio-code/run-all-tests/":"/1.0/learn/vscode-plugin/run-all-tests",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/run-all-tests/":"/1.0/learn/vscode-plugin/run-all-tests",
    "/learn/tools-ides/setting-up-intellij-idea":"/learn/intellij-plugin/",
    "/learn/setting-up-intellij-idea":"/learn/intellij-plugin/",
    "/1.1/learn/tools-ides/setting-up-intellij-idea":"/1.1/learn/intellij-plugin/",
    "/1.1/learn/setting-up-intellij-idea":"/1.1/learn/intellij-plugin/",
    "/1.0/learn/tools-ides/setting-up-intellij-idea":"/1.0/learn/intellij-plugin/",
    "/1.0/learn/setting-up-intellij-idea":"/1.0/learn/intellij-plugin/",
    "/learn/setting-up-intellij-idea/using-the-intellij-plugin":"/learn/intellij-plugin/using-the-intellij-plugin/",
    "/learn/tools-ides/setting-up-intellij-idea/using-the-intellij-plugin":"/learn/intellij-plugin/using-the-intellij-plugin/",
    "/1.1/learn/setting-up-intellij-idea/using-the-intellij-plugin":"/1.1/learn/intellij-plugin/using-the-intellij-plugin/",
    "/1.1/learn/tools-ides/setting-up-intellij-idea/using-the-intellij-plugin":"/1.1/learn/intellij-plugin/using-the-intellij-plugin/",
    "/1.0/learn/setting-up-intellij-idea/using-the-intellij-plugin/":"/1.0/learn/intellij-plugin/using-the-intellij-plugin",
    "/1.0/learn/tools-ides/setting-up-intellij-idea/using-the-intellij-plugin/":"/1.0/learn/intellij-plugin/using-the-intellij-plugin",
    "/learn/setting-up-intellij-idea/using-intellij-plugin-features":"/learn/intellij-plugin/using-intellij-plugin-features/",
    "/learn/tools-ides/setting-up-intellij-idea/using-intellij-plugin-features":"/learn/intellij-plugin/using-intellij-plugin-features/",
    "/1.1/learn/setting-up-intellij-idea/using-intellij-plugin-features":"/1.1/learn/intellij-plugin/using-intellij-plugin-features/",
    "/1.1/learn/tools-ides/setting-up-intellij-idea/using-intellij-plugin-features":"/1.1/learn/intellij-plugin/using-intellij-plugin-features/",
    "/1.0/learn/setting-up-intellij-idea/using-intellij-plugin-features/":"/1.0/learn/intellij-plugin/using-intellij-plugin-features",
    "/1.0/learn/tools-ides/setting-up-intellij-idea/using-intellij-plugin-features/":"/1.0/learn/intellij-plugin/using-intellij-plugin-features",
    "/learn/using-the-cli-tools":"/learn/cli-commands/",
    "/1.1/learn/using-the-cli-tools":"/1.1/learn/cli-commands/",
    "/1.0/learn/using-the-cli-tools":"/1.0/learn/cli-commands/",
    "/1.2/learn/keeping-ballerina-up-to-date":"/1.2/learn/how-to-keep-ballerina-up-to-date",
    "/1.1/learn/keeping-ballerina-up-to-date":"/1.1/learn/how-to-keep-ballerina-up-to-date",
    "/1.0/learn/keeping-ballerina-up-to-date":"/page-not-available.html",
    "/1.1/learn/using-the-openapi-tools":"/1.1/learn/how-to-use-openapi-tools",
    "/1.0/learn/using-the-openapi-tools":"/1.0/learn/how-to-use-openapi-tools/",
    "/learn/generating-ballerina-code-for-protocol-buffer-definitions":"/learn/how-to-generate-code-for-protocol-buffers/",
    "/1.1/learn/generating-ballerina-code-for-protocol-buffer-definitions":"/1.1/learn/how-to-generate-code-for-protocol-buffers/",
    "/1.0/learn/generating-ballerina-code-for-protocol-buffer-definitions":"/1.0/learn/how-to-generate-code-for-protocol-buffers/",
    "/learn/structuring-ballerina-code":"/learn/how-to-structure-ballerina-code/",
    "/1.1/learn/structuring-ballerina-code":"/1.1/learn/how-to-structure-ballerina-code/",
    "/1.0/learn/structuring-ballerina-code":"/1.0/learn/how-to-structure-ballerina-code",
    "/learn/documenting-ballerina-code":"/learn/how-to-document-ballerina-code/",
    "/1.1/learn/documenting-ballerina-code":"/1.1/learn/how-to-document-ballerina-code/",
    "/1.0/learn/documenting-ballerina-code":"/1.0/learn/how-to-document-ballerina-code/",
    "/learn/coding-conventions/":"/learn/style-guide/",
    "/1.1/learn/coding-conventions/":"/1.1/learn/style-guide/",
    "/1.0/learn/coding-conventions":"/1.0/learn/style-guide/",
    "/learn/running-ballerina-code":"/learn/how-to-deploy-and-run-ballerina-programs/",
    "/1.1/learn/running-ballerina-code":"/1.1/learn/how-to-deploy-and-run-ballerina-programs/",
    "/1.0/learn/running-ballerina-code":"/1.0/learn/how-to-deploy-and-run-ballerina-programs/",
    "/1.2/learn/deploying-ballerina-programs-in-the-cloud":"/1.2/learn/deployment/docker",
    "/1.2/learn/deploying-ballerina-programs-in-the-cloud":"/1.2/learn/deployment/docker",
    "/learn/how-to-deploy-and-run-ballerina-programs":"/learn/deployment/docker",
    "/learn/deploying-ballerina-programs-in-the-cloud":"/learn/deployment/docker",
    "/1.1/learn/deployment/docker":"/1.1/learn/how-to-deploy-and-run-ballerina-programs/",
    "/1.0/learn/deployment/docker":"/1.0/learn/how-to-deploy-and-run-ballerina-programs/",
    "/1.1/learn/deployment/kubernetes":"/1.1/learn/how-to-deploy-and-run-ballerina-programs/",
    "/1.0/learn/deployment/kubernetes":"/1.0/learn/how-to-deploy-and-run-ballerina-programs/",
    "/1.1/learn/deploying-ballerina-programs-in-the-cloud":"/1.1/learn/how-to-deploy-and-run-ballerina-programs/",
    "/1.0/learn/deploying-ballerina-programs-in-the-cloud":"/1.0/learn/how-to-deploy-and-run-ballerina-programs/",
    "/learn/publishing-modules-to-ballerina-central":"/learn/how-to-publish-modules/",
    "/1.1/learn/publishing-modules-to-ballerina-central":"/1.1/learn/how-to-publish-modules/",
    "/1.0/learn/publishing-modules-to-ballerina-central":"/1.0/learn/how-to-publish-modules/",
    "/learn/how-to-observe-ballerina-code/":"/learn/observing-ballerina-code",
    "/1.1/swan-lake/learn/how-to-observe-ballerina-code/":"/1.1/swan-lake/learn/observing-ballerina-code",
    "/1.0/swan-lake/learn/how-to-observe-ballerina-code/":"/1.0/swan-lake/learn/observing-ballerina-code",
    "/learn/calling-java-code-from-ballerina":"/1.1/page-not-available.html/",
    "/1.1/learn/calling-java-code-from-ballerina":"/page-not-available.html",
    "/1.0/learn/calling-java-code-from-ballerina":"/page-not-available.html",
    "/learn/writing-secure-ballerina-code":"/learn/how-to-write-secure-ballerina-code/",
    "/1.1/learn/writing-secure-ballerina-code":"/1.1/learn/how-to-write-secure-ballerina-code/",
    "/1.0/learn/writing-secure-ballerina-code":"/1.0/learn/how-to-write-secure-ballerina-code/",
    "/learn/testing-ballerina-code":"/learn/how-to-test-ballerina-code/",
    "/1.2/learn/testing-ballerina-code":"/1.2/learn/how-to-test-ballerina-code/",
    "/1.1/learn/testing-ballerina-code":"/1.1/learn/how-to-test-ballerina-code/",
    "/1.0/learn/testing-ballerina-code":"/1.0/learn/how-to-test-ballerina-code/",
    "/learn/extending-with-compiler-extensions":"/learn/how-to-extend-ballerina/",
    "/1.1/learn/extending-with-compiler-extensions":"/1.1/learn/how-to-extend-ballerina/",
    "/1.0/learn/extending-with-compiler-extensions":"/1.0/learn/how-to-extend-ballerina/",
    "/learn/by-example/documentation.html":"/1.2/learn/by-example/basic-documentation.html",
    "/1.2/learn/by-example/documentation.html":"/1.2/learn/by-example/basic-documentation.html",
    "/learn/coding-conventions/annotations_documentation_and_comments":"/learn/style-guide/annotations_documentation_and_comments",
    "/1.1/learn/coding-conventions/annotations_documentation_and_comments":"/1.1/learn/style-guide/annotations_documentation_and_comments",
    "/1.0/learn/coding-conventions/annotations_documentation_and_comments/":"/1.0/learn/style-guide/annotations_documentation_and_comments",
    "/learn/coding-conventions/top-level-definitions":"/learn/style-guide/definitions",
    "/1.1/learn/coding-conventions/top-level-definitions":"/1.1/learn/style-guide/definitions",
    "/1.0/learn/coding-conventions/top-level-definitions/":"/1.0/learn/style-guide/definitions",
    "/learn/coding-conventions/expressions":"/learn/style-guide/expressions",
    "/1.1/learn/coding-conventions/expressions":"/1.1/learn/style-guide/expressions",
    "/1.0/learn/coding-conventions/expressions/":"/1.0/learn/style-guide/expressions",
    "/learn/coding-conventions/operators_keywords_and_types":"/learn/style-guide/operators_keywords_and_types",
    "/1.1/learn/coding-conventions/operators_keywords_and_types":"/1.1/learn/style-guide/operators_keywords_and_types",
    "/1.0/learn/coding-conventions/operators_keywords_and_types/":"/1.0/learn/style-guide/operators_keywords_and_types",
    "/learn/coding-conventions/statements":"/learn/style-guide/statements",
    "/1.1/learn/coding-conventions/statements":"/1.1/learn/style-guide/statements",
    "/1.0/learn/coding-conventions/statements/":"/1.0/learn/style-guide/statements",
    "/1.1/learn/testing-ballerina-code/testing-quick-start":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/writing-tests":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/mocking":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/executing-tests":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/testing-quick-start":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/writing-tests":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/mocking":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/executing-tests":"/page-not-available.html",
    "/1.1/learn/deployment/aws-lambda/":"/page-not-available.html",
    "/1.0/learn/deployment/aws-lambda/":"/page-not-available.html",
    "/1.1/learn/deployment/azure-functions/":"/page-not-available.html",
    "/1.0/learn/deployment/azure-functions/":"/page-not-available.html",
    "/1.2/learn/ballerina-streaming-reference/":"/1.2/learn/by-example/streams",
    "/learn/ballerina-streaming-reference/":"/learn/by-example/streams",
    "/1.0/learn/faqs":"/1.0/learn/",
    "/1.0/learn/faqs/":"/1.0/learn/",
    "/1.0/learn/faq":"/1.0/learn/",
    "/1.0/learn/faq/":"/1.0/learn/",
    "/1.0/learn/by-guide":"/1.0/learn/",
    "/1.0/learn/by-guide/":"/1.0/learn/",
    "/learn/by-example/jdbc-streaming-big-dataset.html":"/page-not-available.html",
    "/1.1/learn/by-example/jdbc-streaming-big-dataset.html":"/page-not-available.html",
    "/1.0/learn/by-example/jdbc-streaming-big-dataset.html":"/page-not-available.html",
    "/1.1/learn/by-example/knative-deployment.html": "/page-not-available.html",
    "/1.0/learn/by-example/knative-deployment.html": "/page-not-available.html",
    "/1.1/learn/by-example/azure-functions-deployment.html": "/page-not-available.html",
    "/1.0/learn/by-example/azure-functions-deployment": "/page-not-available.html",
    "/1.1/learn/by-example/aws-lambda-deployment.html": "/1.1/learn/by-example/awslambda-deployment.html",
    "/1.0/learn/by-example/aws-lambda-deployment.html": "/1.0/learn/by-example/awslambda-deployment.html",
    "/1.1/learn/api-docs/ballerina/azure.functions/index.html": "/page-not-available.html",
    "/1.0/learn/api-docs/ballerina/azure.functions/index.html": "/page-not-available.html",
    "/1.1/learn/api-docs/ballerina/knative/index.html": "/page-not-available.html",
    "/1.0/learn/api-docs/ballerina/knative/index.html": "/page-not-available.html",
    "/1.1/learn/by-example/awslambda-deployment.html":"/1.1/learn/by-example/aws-lambda-deployment.html",
    "/1.0/learn/by-example/awslambda-deployment.html":"/1.0/learn/by-example/aws-lambda-deployment.html",
    "/1.0/learn/how-to-keep-ballerina-up-to-date/":"/page-not-available.html",
    "/learn/by-example/objects.html":"/learn/by-example/class-definition.html",
    "/1.1/learn/by-example/class-definition.html":"1.1/learn/by-example/objects.html",
    "/1.0/learn/by-example/class-definition.html":"1.0/learn/by-example/objects.html",
    "/learn/by-example/abstract-objects.html":"/learn/by-example/object-type.html",
    "/1.1/learn/by-example/object-type.html":"/1.1/learn/by-example/abstract-objects.html",
    "/1.0/learn/by-example/object-type.html":"/1.0/learn/by-example/abstract-objects.html",
    "/learn/by-example/anonymous-objects.html":"/learn/by-example/object-constructor-expression.html",
    "/1.1/learn/by-example/object-constructor-expression.html":"/1.1/learn/by-example/anonymous-objects.html",
    "/1.0/learn/by-example/object-constructor-expression.html":"/1.0/learn/by-example/anonymous-objects.html",
    "/learn/by-example/readonly-objects-and-fields.html":"/learn/by-example/readonly-objects.html",
    "/1.2/learn/by-example/object-final-fields.html":"/page-not-available.html",
    "/1.1/learn/by-example/object-final-fields.html":"/page-not-available.html",
    "/1.0/learn/by-example/object-final-fields.html":"/page-not-available.html",
    "/1.2/learn/by-example/isolated-functions.html":"/page-not-available.html",
    "/1.1/learn/by-example/isolated-functions.html":"/page-not-available.html",
    "/1.0/learn/by-example/isolated-functions.html":"/page-not-available.html",
    "/1.2/learn/by-example/error-handling-in-single-place.html":"/page-not-available.html",
    "/1.1/learn/by-example/error-handling-in-single-place.html":"/page-not-available.html",
    "/1.0/learn/by-example/error-handling-in-single-place.html":"/page-not-available.html",
    "/1.2/learn/by-example/fail.html":"/page-not-available.html",
    "/1.1/learn/by-example/fail.html":"/page-not-available.html",
    "/1.0/learn/by-example/fail.html":"/page-not-available.html",
    "/learn/by-example/xa-transactions.html":"/page-not-available.html",
    "/learn/by-example/local-transactions-with-participants.html":"/page-not-available.html",
    "/learn/by-example/transactions-distributed.html":"/page-not-available.html",
    "/1.2/learn/by-example/readonly-objects.html":"/page-not-available.html",
    "/1.1/learn/by-example/readonly-objects.html":"/page-not-available.html",
    "/1.0/learn/by-example/readonly-objects.html":"/page-not-available.html",
    "/learn/api-docs/ballerina/*/objects/*":"/learn/api-docs/ballerina/*/classes/*",
    "/learn/extending-with-compiler-extensions/":"/page-not-available.html",
    "/1.2/learn/by-example/websocket-cookie.html":"/page-not-available.html",
    "/1.1/learn/by-example/websocket-cookie.html":"/page-not-available.html",
    "/1.0/learn/by-example/websocket-cookie.html":"/page-not-available.html",
    "/1.2/learn/api-docs/ballerina/ftp/index.html":"/page-not-available.html",
    "/1.1/learn/api-docs/ballerina/ftp/index.html":"/page-not-available.html",
    "/1.0/learn/api-docs/ballerina/ftp/index.html":"/page-not-available.html",
    "/learn/by-example/tracing.html":"/page-not-available.html",
    "/learn/by-example/counter-metrics.html":"/page-not-available.html",
    "/learn/by-example/gauge-metrics.html":"/page-not-available.html",
    "learn/by-example/http-client-data-binding.html":"/page-not-available.html",
    "/1.1/learn/by-example/http-client-data-binding.html":"/page-not-available.html",
    "/1.0/learn/by-example/http-client-data-binding.html":"/page-not-available.html",
    "/learn/deployment/kubernetes/":"/learn/deployment/code-to-cloud/",
    "/1.2/learn/deployment/code-to-cloud/":"/page-not-available.html",
    "/1.1/learn/deployment/code-to-cloud/":"/page-not-available.html",
    "/1.0/learn/deployment/code-to-cloud/":"/page-not-available.html",
    "/1.1/learn/getting-started/quick-tour/":"/1.1/learn/quick-tour",
    "/1.0/learn/getting-started/quick-tour/":"/1.0/learn/quick-tour",
    "/1.1/learn/getting-started/installing-ballerina/":"/1.1/learn/installing-ballerina/",
    "/1.0/learn/getting-started/installing-ballerina/":"/1.0/learn/installing-ballerina/",
    "/1.1/learn/getting-started/setting-up-visual-studio-code/":"/1.1/learn/setting-up-visual-studio-code",
    "/1.0/learn/getting-started/setting-up-visual-studio-code/":"/1.0/learn/setting-up-visual-studio-code",
    "/1.1/learn/getting-started/setting-up-visual-studio-code/documentation-viewer/":"/1.1/learn/setting-up-visual-studio-code/documentation-viewer/",
    "/1.0/learn/getting-started/setting-up-visual-studio-code/documentation-viewer/":"/1.0/learn/setting-up-visual-studio-code/documentation-viewer/",
    "/1.1/learn/getting-started/setting-up-visual-studio-code/graphical-editor/":"/1.1/learn/setting-up-visual-studio-code/graphical-editor/",
    "/1.0/learn/getting-started/setting-up-visual-studio-code/graphical-editor/":"/1.0/learn/setting-up-visual-studio-code/graphical-editor/",
    "/1.1/learn/getting-started/setting-up-visual-studio-code/language-intelligence/":"/1.1/learn/setting-up-visual-studio-code/language-intelligence/",
    "/1.0/learn/getting-started/setting-up-visual-studio-code/language-intelligence/":"/1.0/learn/setting-up-visual-studio-code/language-intelligence/",
    "/1.1/learn/getting-started/setting-up-visual-studio-code/run-all-tests/":"/1.1/learn/setting-up-visual-studio-code/run-all-tests/",
    "/1.0/learn/getting-started/setting-up-visual-studio-code/run-all-tests/":"/1.0/learn/setting-up-visual-studio-code/run-all-tests/",
    "/1.1/learn/getting-started/setting-up-visual-studio-code/run-and-debug/":"/1.1/learn/setting-up-visual-studio-code/run-and-debug/",
    "/1.0/learn/getting-started/setting-up-visual-studio-code/run-and-debug/":"/1.0/learn/setting-up-visual-studio-code/run-and-debug/",
    "/1.2/learn/structuring-ballerina-code/working-with-ballerina-modules/":"/page-not-available",
    "/1.1/learn/structuring-ballerina-code/working-with-ballerina-modules/":"/1.1/page-not-available",
    "/1.0/learn/structuring-ballerina-code/working-with-ballerina-modules/":"/1.0/page-not-available",
    "/learn/by-example/http-filters.html":"/swan-lake/page-not-available",
    "/learn/by-example/secured-service-with-basic-auth.html":"/swan-lake/page-not-available",
    "/learn/by-example/secured-service-with-ldap.html":"/learn/by-example/secured-service-with-basic-auth-ldap-user-store.html",
    "/learn/by-example/secured-client-with-jwt-auth.html":"/learn/by-example/secured-client-with-self-signed-jwt-auth.html",
    "/learn/by-example/secured-client-with-oauth2.html":"/learn/by-example/secured-client-with-oauth2-client-credentials-grant-type.html"
}
