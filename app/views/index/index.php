<div class="container" id="app">
    <h1 class="display-1 text-center">Starte Anwendung&hellip;</h1>
</div>

<script type="text/javascript">
    let API_URL  = '<?= PluginEngine::getURL('meetingplugin', [], 'api', true) ?>';
    let CID      = '<?= $cid ?>';
    let ICON_URL = '<?= Assets::url('images/icons/') ?>';
    let PLUGIN_ASSET_URL =  '<?= $plugin->getAssetsUrl() ?>';
</script>


<? PageLayout::addScript($this->plugin->getPluginUrl() . '/static/main.c1606ebf3f58fb1b9962.js'); ?>

