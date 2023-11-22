---
sidebar_position: 41
---

# Examples for License Setup & Commands

## Common Licenses

- In many cases `Apache-2.0` is an appropriate license for code.
- For assets and documentation `CC-BY-4.0` is a common choice.

See https://spdx.org/licenses/ for a full list of licenses supported by the standard.   
REUSE expects all licenses to be provided by their SPDX Identifier, as found at the link above.

:::info[If you are a Deutsche Telekom Employee]

Contact the OSPO in case you have not received guidance on license choices for your project yet.

:::

## Declaring license information 

The REUSE standard has two ways for specifying license and copyright information. 
- For text-based formats the information is placed in a comment at the top of the file. 
- For binary formats, or formats without a comment syntax, the license information is placed in an adjacent file `<filename>.<ext>.license`

The basic syntax to do this automatically is `pipx run reuse annotate -c="<COPYRIGHT-HOLDER>" -l="<LICENSE-SPDX-IDENTIFIER>" <file>`

:::info
For Deutsche Telekom, use `Deutsche Telekom AG` as the copyright holder.
::: 

### Set up single files

### Set up whole directories

### Handle files with unkommon or binary formats

<!-- Run pipx reuse annotate ... to add Copyright and license statements to all files.
See https://github.com/telekom/reuse-template#reuse for an example.
To initialize single files use pipx run reuse annotate -c="Deutsche Telekom AG" -l="<LICENSE-SPDX-IDENTIFIER>" <file>.
To initialize whole directories you can use pipx run reuse annotate -c "Deutsche Telekom AG" -l "<SPDX-LICENSE-ID>" --recursive --skip-existing ./.
BEWARE: Use the right path, ./ is not always what you need! If your assets are under a different license than your code, you need to perform one run on e.g. ./src and one on e.g. ./resources.
BEWARE: Replace the with the appropriate real license ID (see https://spdx.org/licenses/ for options), e.g. Apache-2.0 or CC-BY-4.0
Run pipx run reuse download --all to make sure license text is placed in the ./LICENSES/ directory.
Run pipx run reuse lint to verify the project is REUSE compliant. -->