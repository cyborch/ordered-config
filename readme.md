ordered-config
--------------

`ordered-config` loads configurations from a `config` folder. The default
configuration is loaded from `config/default.json` followed by a json file named
by the `CONFIG_ENV` environment variable (e.g. `development` or `production`),
followed by a `config/local.json` file.

Configurations are loaded in order and any configuration key which appears in
a configuration file overrides keys with the same name in previous files.
