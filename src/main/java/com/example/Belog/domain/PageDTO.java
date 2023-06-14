package com.example.Belog.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class PageDTO {
    private int startPage;
    private int endPage;
    private int realEnd;
    private int total;
    private boolean prev;
    private boolean next;

    public PageDTO(int total, Criteria criteria) {
        // pageNum에 cri로 넘어온 page를 넣어줍니다.
        // 즉, pathVariable로 5페이지가 넘어왔으면 여기에도 Criteria를 거쳐서
        // 5가 넘어옵니다.
        int pageNum = criteria.getPage();
        this.total = total;

        this.endPage = (int)Math.ceil(pageNum/10.0) * 10;
        this.startPage = this.endPage - (criteria.getBOARD_NUM_PER_PAGE() - 1);
        this.realEnd = (int)Math.ceil((total * 1.0 / 10));

        // endPage가 realEnd보다 크면 realEnd를 반환하고 작으면 endPage를 반환
        if (endPage > realEnd) {
            endPage = realEnd;
        }

        this.prev = this.startPage > 1;
        this.next = this.endPage < this.realEnd;
    }
}
