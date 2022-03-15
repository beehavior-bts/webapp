<template>
<div>
  <div>
    <TopBar />
    <SideBar />
  </div>

  <div class="col-12">
        <chart-card title="captors">
          <span slot="footer">
            <i class="ti-reload"></i> Updated 3 minutes ago
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Click
            <i class="fa fa-circle text-warning"></i> Click Second Time
          </div>
        </chart-card>
  </div>
</div>

</template>

<script>
  export default {
    name: 'welcomePage'
  }
</script>
