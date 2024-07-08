---
sidebar_position: 40
---

# Set up the Licenses (5 - 10 min)

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

The basic syntax to do this automatically is:   
`pipx run reuse annotate -c="<COPYRIGHT-HOLDER>" -l="<LICENSE-SPDX-IDENTIFIER>" <file>`

:::note
The following examples will use `Deutsche Telekom AG` as copyright holder and `APACHE-2.0` or `CC-BY-4.0` as license. Please substitute the correct values for your own use case.
::: 

### Set up single files

To specify the licensing information for a single file you can run e.g.:

`pipx run reuse annotate -c="Deutsche Telekom AG" -l="Apache-2.0" main.java`

### Set up whole directories

Consider a repository with a folder `src` for the source code, `docs` for documentation and `img` for image assets in use by the code. 
You do not have to annotate each single file, instead you can apply a license per folder.

`pipx run reuse annotate -c "Deutsche Telekom AG" -l "Apache-2.0" --recursive --skip-existing ./src`

`pipx run reuse annotate -c "Deutsche Telekom AG" -l "CC-BY-4.0" --recursive --skip-existing ./docs`

`pipx run reuse annotate -c "Deutsche Telekom AG" -l "CC-BY-4.0" --recursive --skip-existing ./img`

### Set up whole directories - alternative

Alternatively you can declare the license for entire directories using glob patterns.   
The license data is specified in `./RESUSE.toml`, the file should already exist in the template.

Visit https://reuse.software/spec-3.2/#reusetoml to learn about the format. The existing file contains one commented-out example entry.

:::warning

Generally it is recommended to use the annotate --recursive option for better readability and clarity.  
However in some scenarios it makes sense to declare a directory via .toml file, for example if external dependencies are included in your repository. 

:::

### Handle files with unkommon or binary formats

In rare cases you may notice (or [Verify Compliance](./verify-compliance.md) may tell you) that some files are not licensed, despite you running annotate on the file or the directory. 

That means that the REUSE tool did not recognize the format and was not able to add a license header. In that case you can simply tell it to create a `.license` file using `--force-dot-license`:

`pipx run reuse annotate -c "Deutsche Telekom AG" -l "CC-BY-4.0" --recursive --skip-existing --force-dot-license ./src/myfile.weirdextension`

## Providing License Texts

The REUSE standard also requires to provide the texts for each license used in the repository.   
To that end simply run `pipx run reuse download --all`, it will set up the license texts for you.
