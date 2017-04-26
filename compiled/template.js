"use strict";

module.exports = function () {
  return function (h) {

    var items = [];

    this.pages.map(function (page) {
      items.push(h(
        "li",
        { "class": "number page-link VuePagination__pagination-item page-item " + this.activeClass(page) },
        [h(
          "a",
          { "class": "page-link", attrs: { href: "javascript:void(0);"
            },
            on: {
              "click": this.setPage.bind(this, page)
            }
          },
          [page]
        )]
      ));
    }.bind(this));

    return h(
      "span",
      { "class": "VuePagination" },
      [h(
        "button",
        { "class": "btn-prev VuePagination__pagination-item page-item VuePagination__pagination-item-prev-chunk " + this.allowedChunkClass(-1) },
        [h(
          "i",
          { "class": "el-icon el-icon-arrow-left page-link", attrs: { href: "javascript:void(0);"
            },
            on: {
              "click": this.setChunk.bind(this, -1)
            }
          },
          ["<<"]
        )]
      ), h(
        "button",
        { "class": "btn-prev VuePagination__pagination-item page-item VuePagination__pagination-item-prev-page " + this.allowedPageClass(this.page - 1) },
        [h(
          "i",
          { "class": "el-icon el-icon-arrow-left page-link", attrs: { href: "javascript:void(0);"
            },
            on: {
              "click": this.prev.bind(this)
            }
          },
          ["<"]
        )]
      ), h(
        "ul",
        {
          directives: [{
            name: "show",
            value: this.totalPages > 1
          }],

          "class": "el-pager pagination VuePagination__pagination" },
        [items]
      ), h(
        "button",
        { "class": "btn-next VuePagination__pagination-item page-item VuePagination__pagination-item-next-page " + this.allowedPageClass(this.page + 1) },
        [h(
          "i",
          { "class": "el-icon el-icon-arrow-right page-link", attrs: { href: "javascript:void(0);"
            },
            on: {
              "click": this.next.bind(this)
            }
          },
          [">"]
        )]
      ), h(
        "button",
        { "class": "btn-next VuePagination__pagination-item page-item VuePagination__pagination-item-next-chunk " + this.allowedChunkClass(1) },
        [h(
          "i",
          { "class": "el-icon el-icon-arrow-right page-link", attrs: { href: "javascript:void(0);"
            },
            on: {
              "click": this.setChunk.bind(this, 1)
            }
          },
          [">>"]
        )]
      )]
    );
  };
};