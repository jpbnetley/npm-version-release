# npm version release
> Release npm packages using npm version

## Notes
- For the gh action to create pull requests, set the permission for the repo to "can create and merge pull requests"
- for the action that creates the pull request, ensure the pull request write permission is granted
```yml
pull-requests: write
```

- For publishing the package, the action required
```yml
contents: write
packages: write
```

## Order of events
In order to maintain pre-release and production release versions, the order which the releases done are important.  
Development continues as always on the dev branch.

Once a release needs to be cut, a pull request is made to the main branch.  
Once merged, a build can be kicked off by running the `release-main` workflow.
This workflow will ask the branch to run on, and the release version.  
The release version uses [semantic versioning](https://semver.org/) to determine the release version.  
Thus the patch, minor, major options are provided when doing the production release.

Once the production release is completed, a pull request is made to merge the new version change back down to dev.

*NOTE*
It is important to merge the production release version changes down to dev before any new changes on dev are made.  
This ensures that the correct version is used on dev for the next dev releases.

### Ref
This package is consumed the project: https://github.com/jpbnetley/npm-version-consume
