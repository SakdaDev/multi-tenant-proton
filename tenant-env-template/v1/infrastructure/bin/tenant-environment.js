"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const tenant_environment_1 = require("../lib/tenant-environment");
const proton_inputs_json_1 = __importDefault(require("../proton-inputs.json"));
const tenantEnv = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};
const stackName = proton_inputs_json_1.default.environment.name;
const app = new aws_cdk_lib_1.App();
new tenant_environment_1.TenantEnvironmentStack(app, "TenantEnv", {
    env: tenantEnv,
    stackName: stackName,
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWVudmlyb25tZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVuYW50LWVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkNBQWtDO0FBQ2xDLGtFQUFtRTtBQUNuRSwrRUFBMEM7QUFFMUMsTUFBTSxTQUFTLEdBQUc7SUFDaEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CO0lBQ3hDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtDQUN2QyxDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUcsNEJBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0FBRXpDLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQUcsRUFBRSxDQUFDO0FBRXRCLElBQUksMkNBQXNCLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRTtJQUMzQyxHQUFHLEVBQUUsU0FBUztJQUNkLFNBQVMsRUFBRSxTQUFTO0NBQ3JCLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcCB9IGZyb20gXCJhd3MtY2RrLWxpYlwiO1xuaW1wb3J0IHsgVGVuYW50RW52aXJvbm1lbnRTdGFjayB9IGZyb20gXCIuLi9saWIvdGVuYW50LWVudmlyb25tZW50XCI7XG5pbXBvcnQgaW5wdXQgZnJvbSBcIi4uL3Byb3Rvbi1pbnB1dHMuanNvblwiO1xuXG5jb25zdCB0ZW5hbnRFbnYgPSB7XG4gIGFjY291bnQ6IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX0FDQ09VTlQsXG4gIHJlZ2lvbjogcHJvY2Vzcy5lbnYuQ0RLX0RFRkFVTFRfUkVHSU9OLFxufTtcblxuY29uc3Qgc3RhY2tOYW1lID0gaW5wdXQuZW52aXJvbm1lbnQubmFtZTtcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuXG5uZXcgVGVuYW50RW52aXJvbm1lbnRTdGFjayhhcHAsIFwiVGVuYW50RW52XCIsIHtcbiAgZW52OiB0ZW5hbnRFbnYsXG4gIHN0YWNrTmFtZTogc3RhY2tOYW1lLFxufSk7XG5cbmFwcC5zeW50aCgpO1xuIl19