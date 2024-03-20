---
sidebar_position: 30
---

# Common REUSE CLI Commands

## Check for incompliant files (= not properly licensed)

Run `pipx run reuse lint`

## Add REUSE statements to a file

Run `pipx run reuse annotate -c="<COPYRIGHT>" -l="<LICENSE-SPDX-IDENTIFIER>" <file>`

Replace `<COPYRIGHT>` with the copyright holder, e.g "Deutsche Telekom AG", and `<LICENSE-SPDX-IDENTIFIER>` with the ID of the license the file should be under. For possible IDs see https://spdx.org/licenses/.

## Add REUSE statements to a directory

Run `pipx run reuse annotate -c "<COPYRIGHT>" -l "<LICENSE-SPDX-IDENTIFIER>" --recursive --skip-existing <directory>`

## Add missing license texts to the repo

Run `pipx run reuse download --all` to add license texts for all licenses detected in the project.

## Get an SPDX file with all licensing information for this project (not for dependencies!)

Run `pipx run reuse spdx`