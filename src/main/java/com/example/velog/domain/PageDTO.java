package com.example.velog.domain;

public class PageDTO {
    private int startPage;
    private int endPage;
    private int realEnd;
    private int total;
    private boolean prev;
    private boolean next;

    public PageDTO(int total, Criteria criteria) {
        int pageNum = criteria.getPage();
        this.total = total;

        this.endPage = (int)Math.ceil(pageNum/10.0) * 10;
        this.startPage = this.endPage - (criteria.getBOARD_NUM_PER_PAGE() - 1);
        this.realEnd = (int)Math.ceil((total * 1.0 / 10));

        if (endPage > realEnd) {
            endPage = realEnd;
        }

        this.prev = this.startPage > 1;
        this.next = this.endPage < this.realEnd;
    }
}
