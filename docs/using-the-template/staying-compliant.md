---
sidebar_position: 60
---

# Staying compliant

When adding new files to the repository, `pipx reuse annotate ... needs`` to be run on the files to add the copyright and license.

:::tip
Alternatively you can also take a look at the license info comments that REUSE created for your source files and set up your IDE to create header comments in the same format.
:::

It is good practice to run `pipx run reuse lint` before each commit that created a new file, and if necessary follow the steps of [Set up the Licenses](./setup-license.md#set-up-single-files) to address any issues.

You may also consider adding a pre-commit hook to do automate the compliance check locally: https://reuse.software/dev/#pre-commit-hook 

Additionally the github actions included with the REUSE template will cause Pull Request checks to fail if not compliant, allowing you to address missing license info annotations before merging. 


:::note
It is not necessary to update the copyright year in files, however it is recommended to do so if major changes were made since the last year shown in the copyright line.
You can either simply run `pipx run reuse annotate -c "<copyright holder>" -l "<license>" <myfile>` again, which will add a new copyright line for the new year, or manually change e.g. "2021" to "2021-2023" in the existing line.
::: 