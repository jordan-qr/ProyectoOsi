<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hola2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '|g2:^ys^onopp}HLIzSDujc9`6l Fx%9`+qMe!Y:3-I/gOHdkG|:5EZ=lD7)rfI>' );
define( 'SECURE_AUTH_KEY',  '1`GFe.Cc*<ob=d{5|_eN-F5<Jg9Us);pTcy>g$xhEC~}!vAC3o(kK52/*k0`bl!.' );
define( 'LOGGED_IN_KEY',    '#Bs*@>{V,Q]NNzd<JvFEa7]vAa-5>;:Xa_z!Q9En_5CD]QRQ aaGV||VJ[h%{V3m' );
define( 'NONCE_KEY',        '?sj)Y_QHF7%Rk*A0b8E?)qDKqH#ZaZ>sNVc{d;ynNJ_Db.vq{xqNSZv3M5NQHvGN' );
define( 'AUTH_SALT',        '[N`*yHs!qpt={<2z/)JU]U=XQ@yKW9Re?Qm8(k,]+%LBsZAoK~<EH[/-18>DIxy~' );
define( 'SECURE_AUTH_SALT', 'u~{~SDo1oFV`XUHZZ@Y935lODe;/8uT7,*I!4|F9B!l/N)B&`F_ZJBm%bS5fY_ 6' );
define( 'LOGGED_IN_SALT',   ' EG TSP<>DBL(<>{%hk.7L]tilZ<K $T%.M:#pS[`<{TA}3;!J6@_ECu9[[bgO)@' );
define( 'NONCE_SALT',       '5.rrH=Mx_JR}6uZ{#5{_B-Xty)aU*89C^|sA^@4PP3of.0!/wvGndPJf|^`@K$K@' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
