const JSAsset = require('./JSAsset')

class ZengineMigratorJSAsset extends JSAsset {
    async pretransform() {
        this.contents = this.interpolate(this.contents)
        return super.pretransform()
    }

    interpolate(code) {
        const replacement = require('fs').readFileSync(require('path').resolve(process.cwd(), 'plugin', 'plugin.js'))
        return code.replace(/\/\*\s*PLUGIN_JS\s*\*\//, replacement)
    }
}

module.exports = ZengineMigratorJSAsset
