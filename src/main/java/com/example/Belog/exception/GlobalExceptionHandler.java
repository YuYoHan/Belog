package com.example.Belog.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handlerException(Exception exception, Model model) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(exception);
    }

    @ExceptionHandler(UserNotFoundException.class )
    public ResponseEntity<UserException> handleCustomException(UserException userException, Model model) {
        model.addAttribute("userException", userException);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(userException);
    }

    @ExceptionHandler(BoardNotFoundException.class)
    public ResponseEntity<BoardException> handleCustomException2(BoardException boardException, Model model) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(boardException);
    }

}
