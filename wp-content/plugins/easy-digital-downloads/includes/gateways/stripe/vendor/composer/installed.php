<?php return array(
    'root' => array(
        'name' => 'easy-digital-downloads/edd-stripe',
        'pretty_version' => 'dev-master',
        'version' => 'dev-master',
        'reference' => '43ecc082e8a2f97bb5f5d2f0825f30c36f5f4c39',
        'type' => 'wordpress-plugin',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => false,
    ),
    'versions' => array(
        'composer/installers' => array(
            'pretty_version' => 'v1.11.0',
            'version' => '1.11.0.0',
            'reference' => 'ae03311f45dfe194412081526be2e003960df74b',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/./installers',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'easy-digital-downloads/edd-stripe' => array(
            'pretty_version' => 'dev-master',
            'version' => 'dev-master',
            'reference' => '43ecc082e8a2f97bb5f5d2f0825f30c36f5f4c39',
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'roundcube/plugin-installer' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
        'shama/baton' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
        'stripe/stripe-php' => array(
            'pretty_version' => 'v7.47.0',
            'version' => '7.47.0.0',
            'reference' => 'b51656cb398d081fcee53a76f6edb8fd5c1a5306',
            'type' => 'library',
            'install_path' => __DIR__ . '/../stripe/stripe-php',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
    ),
);
