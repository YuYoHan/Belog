package com.example.velog.domain;

public class Criteria {
    // 현재 페이지
    private int page;
    // 페이지당 게시글 개수
    private final int BOARD_NUM_PER_PAGE = 10;

    public Criteria(int page) {
        this.page = page;
    }

    public int getPageFirstBoardNum() {
        // 현재 페이지의 게시글 시작 번호
        return (this.page - 1) * BOARD_NUM_PER_PAGE;
    }

    public int getPage() {
        return this.page;
    }

    public int getBOARD_NUM_PER_PAGE() {
        return this.BOARD_NUM_PER_PAGE;
    }
}
