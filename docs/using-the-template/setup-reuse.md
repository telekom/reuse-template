---
sidebar_position: 30
---

# Set up REUSE (5 min)

REUSE comes with a python-based tool that will allow you to set up licensing and verify compliance with the REUSE standard.
The verification will run in CI/CD, which already set up for the template repo.   
All that remains to do is to set up the tool locally to specify license information quickly.

## Install pipx

For simplicity it is recommended to run the tool with pipx, which, without any setup, runs python applications in isolated environments.
Head over to https://pypa.github.io/pipx/installation/ for instructions.

## Test the REUSE command

1. Run `pipx run reuse lint`
2. You should see output from REUSE. It may complain about non-compliance, that is ok at this point.

## Initialize REUSE

If your repository was created based on https://github.com/telekom/reuse-template it will already feature a file named `REUSE.toml` in the root directory. 

If the file is not yet present, copy https://github.com/telekom/reuse-template/blob/main/REUSE.toml to your repository.
At the beginning it is fine that the file is mostly empty, the nexts steps will tell you if you need to add additional information.

:::tip

This is no longer necessary (and the `init` subcommand no longer exists) as of the [reuse specification 3.2](https://reuse.software/spec-3.2/).

You can skip ahead to the [next step](./setup-license.md)!

:::

:::tip

As of spec version 3.2 `.reuse/dep5` has been replaced by `./REUSE.toml`.
You can update your old dep5 file to a .toml using `pipx run reuse convert-dep5`

:::


1. Clone your repository locally
2. In the cloned directory, run `pipx run reuse init`
3. The command will ask basic information about the project
   1. You can skip the license question with ENTER, as the licenses will be handled later.
      :::info
      If you know which licenses will be used you can of course already enter them.
      The input expects the [SPDX Identifier](https://spdx.org/licenses/).
      :::
   2. The internet address of your project will be the GitHub repository URL, unless you have a separate website.
   3. The name of the maintainer can be "Deutsche Telekom AG".
   4. The e-mail of the maintainer can be "opensource@telekom.de".
        :::warning
        If you are not a Deutsche Telekom employee you should obviously use your own name and e-mail!
        :::

If the file is not yet present, copy https://github.com/telekom/reuse-template/blob/main/REUSE.toml to your repository.
At the beginning it is fine that the file is mostly empty, the nexts steps will tell you if you need to add additional information.