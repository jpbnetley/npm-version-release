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

### Ref
Package that installes this package: https://github.com/jpbnetley/npm-version-consume
