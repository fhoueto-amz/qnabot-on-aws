/*********************************************************************************************************************
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
 *********************************************************************************************************************/

function create() {
    const file = `${__dirname}/`;
    return require(file);
}
// NOTICE: Canvas LMS integration with QnABot on AWS is deprecated in this release and no longer be supported. Customers may fork the code needed for their specific use case from previous versions. The integration code will be removed in the next release.


it('renders examples template correctly', () => {
    const template = create();
    expect(template).toMatchSnapshot({
        Resources: {
            CodeVersionCanvasLMSHook: {
                Properties: {
                    BuildDate: expect.any(String),
                },
            },
            CodeVersionCreateRecentTopicsResponse: {
                Properties: {
                    BuildDate: expect.any(String),
                },
            },
            CodeVersionCustomJSHook: {
                Properties: {
                    BuildDate: expect.any(String),
                },
            },
            CodeVersionCustomPYHook: {
                Properties: {
                    BuildDate: expect.any(String),
                },
            },
            EXTUiImportVersion: {
                Properties: {
                    BuildDate: expect.any(String),
                },
            },
            ExampleCodeVersion: {
                Properties: {
                    BuildDate: expect.any(String),
                },
            },
            JsLambdaHookSDKLambdaLayerCodeVersion: {
                Properties: {
                    BuildDate: expect.any(String),
                },
            },
        },
    });
});
