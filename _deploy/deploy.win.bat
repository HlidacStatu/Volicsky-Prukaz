@echo off

if '%1'=='' goto argumentError

robocopy ..\ %1 /s /purge /xf .* package.json package-lock.json README.* *.php /xd .git _deploy

if ERRORLEVEL 4 goto :copyError

echo:
echo Successfully compiled and deployed application
echo:
if '%3'=='' exit 0

goto :EOF

:argumentError
  echo:
  echo Usage: deploy output configuration
  echo:
  echo    - output: folder to copy neccessary files
  echo:
  if '%3'=='' exit 1

  goto :EOF



:copyError
  echo:
  echo Copying failed, aborting..
  echo:
  if '%3'=='' exit 1

  goto :EOF