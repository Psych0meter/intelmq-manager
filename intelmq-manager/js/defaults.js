function generate_defaults_conf(defaults) {
    defaults = sortObjectByPropertyName(defaults);
    return JSON.stringify(defaults, undefined, 4);
}

function read_defaults_conf(config) {
    return config
}

function remove_defaults(nodes) {
    for (id in nodes) {
        delete nodes[id].defaults;
    }

    return nodes;
}

function add_defaults_to_nodes(nodes, defaultConfig) {
    var defaults = 'defaults';
    for (id in nodes) {
        var node=nodes[id];
        node.id = id;
        node.defaults = {};

        for (key in defaultConfig) {
            if (key in node.parameters) {
                continue;
            }

            node.defaults[key] = defaultConfig[key];
        }
    }

    return nodes;
}
