<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'cursoemvideowp' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';jYwa^;B=6/SYJQ6yZK)Pf`n5U*h]?a)k9A/qZILVi)b##~f0+279x`[}Q5(4?v,' );
define( 'SECURE_AUTH_KEY',  '4hmljZQ}r<O%,<x$?r3X5#&b* /WAdEvT4$+_<Sk#xG)!`y6cS5Pc!7z1ie<W+$U' );
define( 'LOGGED_IN_KEY',    '@0J?9/>4NH#g<fiMHbhdv1;&^FcYT^Nw]:)B8WOd>&QnP>,qE+?5IbI$BCj#yq<o' );
define( 'NONCE_KEY',        '^6KU-!GnvPVe$<KvqSyu|P^Wa+p$~:fefol)?WW<oBpuS8c<C`1X!l#9=j(cSjp8' );
define( 'AUTH_SALT',        '}Lw>>2*&?6X1rQS1+,8TW)u0XN =#$f;5-m(hor.5!8PgAxGhhH>d8M7L<_z.j8o' );
define( 'SECURE_AUTH_SALT', '[jbFrCH(V)f:P*?]| dhx2VoVzZ;WT9]T-WRfCyu|1IC?B;W`&O4g<N0Z/v$BeQ!' );
define( 'LOGGED_IN_SALT',   ';[5=p6[IDD{ v_#t<z=3,k$.CQ-`4oV{S]4F?r`G^bJ*ew]*<}ZW*rWF?*,4x)3F' );
define( 'NONCE_SALT',       '% 9 e=BB#U0dVK_BB:)FMJsg)v)LsvT(4Hl*2XM$ :F6-~8l?NS?#O(TriD@*c/>' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
