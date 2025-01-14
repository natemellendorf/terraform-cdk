import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput, Testing, ref } from "cdktf";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new TerraformOutput(this, "dummy", {
      value: ref("some_resource.that_does_not.exist", this),
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "hello-terra");
app.synth();
