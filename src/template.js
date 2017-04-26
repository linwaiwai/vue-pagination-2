module.exports = function() {
  return function(h) {

  var items = [];

  this.pages.map(function(page) {
      items.push(
        <li class={"number page-link VuePagination__pagination-item page-item "+this.activeClass(page)}>
        <a class="page-link" href="javascript:void(0);"
        on-click={this.setPage.bind(this, page)}>{page}</a>
        </li>
        )
  }.bind(this));

  return <span class={"VuePagination"}>
  <button class={"btn-prev VuePagination__pagination-item page-item VuePagination__pagination-item-prev-chunk "+this.allowedChunkClass(-1)}>
    <i class="el-icon el-icon-arrow-left page-link" href="javascript:void(0);"
  on-click={this.setChunk.bind(this,-1)}>&lt;&lt;</i>
  </button>
  <button class={"btn-prev VuePagination__pagination-item page-item VuePagination__pagination-item-prev-page "+this.allowedPageClass(this.page-1)}>
    <i class="el-icon el-icon-arrow-left page-link" href="javascript:void(0);"
  on-click={this.prev.bind(this)}>&lt;</i>
  </button>

  <ul v-show={this.totalPages>1}
  class="el-pager pagination VuePagination__pagination">

  {items}
  </ul>

  <button class={"btn-next VuePagination__pagination-item page-item VuePagination__pagination-item-next-page "+this.allowedPageClass(this.page+1)}>
    <i class="el-icon el-icon-arrow-right page-link" href="javascript:void(0);"
  on-click={this.next.bind(this)}>&gt;</i>
  </button>

  <button class={"btn-next VuePagination__pagination-item page-item VuePagination__pagination-item-next-chunk "+this.allowedChunkClass(1)}>
    <i class="el-icon el-icon-arrow-right page-link" href="javascript:void(0);"
  on-click={this.setChunk.bind(this,1)}>&gt;&gt;</i>
  </button>

  </span>
}
}
