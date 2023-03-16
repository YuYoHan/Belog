package com.example.Belog.exception;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExcepttionHandler {
    @ExceptionHandler(Exception.class)
    public String handlerException(Exception exception, Model model) {
        model.addAttribute("exception", exception);
        return "/error/globalError";
    }

    @ExceptionHandler(UserException.class )
    public String handleCustomException(UserException userException, Model model) {
        model.addAttribute("userException", userException);
        return "/error/userError";
    }

    @ExceptionHandler(BoardException.class)
    public String handleCustomException2(BoardException boardException, Model model) {
        model.addAttribute("boardException", boardException);
        return "/error/boardError";
    }

}
