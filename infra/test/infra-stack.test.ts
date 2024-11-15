import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { InfraStack } from '../lib/infra-stack';

describe('InfraStack', () => {
    let app: cdk.App;
    let stack: InfraStack;

    beforeEach(() => {
        jest.resetModules();
        app = new cdk.App();
        stack = new InfraStack(app, 'MyTestStack');
    });

    it('should create a stack', () => {
        const template = Template.fromStack(stack);
        expect(template).toBeDefined();
    });

    it('should create only one stack', () => {
        expect(stack).toBeDefined();
        
        const assembly = app.synth();
        
        expect(assembly.stacks.length).toBe(1);
    });
});