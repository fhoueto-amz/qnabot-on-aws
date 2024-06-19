/** *******************************************************************************************************************
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.                                                *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/                                                                               *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 ******************************************************************************************************************** */

module.exports = {
    ExportStack: {
        Type: 'AWS::CloudFormation::Stack',
        Properties: {
            TemplateURL: { 'Fn::Sub': 'https://${BootstrapBucket}.s3.${AWS::Region}.amazonaws.com/${BootstrapPrefix}/templates/export.json' },
            Parameters: {
                CFNLambda: { 'Fn::GetAtt': ['CFNLambda', 'Arn'] },
                CFNInvokePolicy: { Ref: 'CFNInvokePolicy' },
                S3Clean: { 'Fn::GetAtt': ['S3Clean', 'Arn'] },
                BootstrapBucket: { Ref: 'BootstrapBucket' },
                BootstrapPrefix: { Ref: 'BootstrapPrefix' },
                VarIndex: { 'Fn::GetAtt': ['Var', 'QnaIndex'] },
                EsEndpoint: { 'Fn::GetAtt': ['ESVar', 'ESAddress'] },
                EsProxyLambda: { 'Fn::GetAtt': ['ESProxyLambda', 'Arn'] },
                ExportBucket: { Ref: 'ExportBucket' },
                VPCSubnetIdList: { 'Fn::Join': [',', { Ref: 'VPCSubnetIdList' }] },
                VPCSecurityGroupIdList: { 'Fn::Join': [',', { Ref: 'VPCSecurityGroupIdList' }] },
                XraySetting: { Ref: 'XraySetting' },
                Api: { Ref: 'API' },
                ApiRootResourceId: { 'Fn::GetAtt': ['API', 'RootResourceId'] },
                Stage: { Ref: 'Stage' },
                ApiDeploymentId: { Ref: 'Deployment' },
                KendraCrawlerSnsTopic: { Ref: 'KendraCrawlerSnsTopic' },
                DefaultQnABotSettings: { Ref: 'DefaultQnABotSettings' },
                PrivateQnABotSettings: { Ref: 'PrivateQnABotSettings' },
                CustomQnABotSettings: { Ref: 'CustomQnABotSettings' },
                AwsSdkLayerLambdaLayer: { Ref: 'AwsSdkLayerLambdaLayer' },
                QnABotCommonLambdaLayer: { Ref: 'QnABotCommonLambdaLayer' },
                LexVersion: { 'Fn::If': ['CreateLexV1Bots', 'V1', 'V2'] },
                // Lex V1
                FallbackIntent: { 'Fn::If': ['CreateLexV1Bots', { Ref: 'IntentFallback' }, 'LexV2Only_Mode'] },
                Intent: { 'Fn::If': ['CreateLexV1Bots', { Ref: 'Intent' }, 'LexV2Only_Mode'] },
                BotName: { 'Fn::If': ['CreateLexV1Bots', { Ref: 'LexBot' }, 'LexV2Only_Mode'] },
                // Lex V2
                LexV2BotName: { 'Fn::GetAtt': ['LexV2Bot', 'botName'] },
                LexV2BotId: { 'Fn::GetAtt': ['LexV2Bot', 'botId'] },
                LexV2BotAlias: { 'Fn::GetAtt': ['LexV2Bot', 'botAlias'] },
                LexV2BotAliasId: { 'Fn::GetAtt': ['LexV2Bot', 'botAliasId'] },
                LexV2BotLocaleIds: { 'Fn::GetAtt': ['LexV2Bot', 'botLocaleIds'] },
                KendraFaqIndexId: { Ref: 'KendraFaqIndexId' },
                KendraWebPageIndexId: { Ref: 'KendraWebPageIndexId' },
            },
        },
    },
};
