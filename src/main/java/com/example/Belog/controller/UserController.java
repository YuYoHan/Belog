package com.example.Belog.controller;

import com.example.Belog.domain.UserDTO;
import com.example.Belog.service.UserService;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;
import java.util.Optional;

// API 그룹 설정
// name : 태그의 이름
// description : API 그룹에 대한 설명
@Tag(name = "user check", description = "API 상태 체크")
@RestController
@Log4j2
@AllArgsConstructor
@RequestMapping("/v1/user")
public class UserController {

    private UserService userService;

    // 모든 회원 정보를 가져오는 API
    @GetMapping("/")
    @Tag(name = "user check")
    @Operation(summary = "전체 불러오기 API", description = "모든 유저들을 불러오는 API입니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "모든 회원조회 성공"),
            @ApiResponse(responseCode = "404", description = "모든 회원조회 실패")
    })
    public ResponseEntity<List<UserDTO>> getAllUser() {
        List<UserDTO> userDTOList = userService.getAllUser();

//        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter
//                .filterOutAllExcept("userId", "userEmail", "userName", "userAddr", "userAddrDetail", "userAddrEtc");
//
//        FilterProvider filters = new SimpleFilterProvider().addFilter("user", filter);
//
//        MappingJacksonValue value = new MappingJacksonValue(userDTOList);
//        value.setFilters(filters);

        return ResponseEntity.status(HttpStatus.OK).body(userDTOList);
    }

    // 회원 정보를 가져오는 API
    @GetMapping("/{userEmail}")
    @Tag(name = "user check")
    @Operation(summary = "불러오기 API", description = "특정 유저들을 불러오는 API입니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "회원조회 성공"),
            @ApiResponse(responseCode = "404", description = "회원조회 실패")
    })
    public ResponseEntity<?> getUser(
             @PathVariable String userEmail) {
        UserDTO userDTO = userService.getUser(userEmail);

//        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter
//                .filterOutAllExcept("userId", "userEmail", "userName", "userAddr", "userAddrDetail", "userAddrEtc");
//
//        FilterProvider filters = new SimpleFilterProvider().addFilter("user", filter);
//
//        MappingJacksonValue value = new MappingJacksonValue(userDTO);
//        value.setFilters(filters);

        if (userDTO != null) {
            return ResponseEntity.status(HttpStatus.OK).body(userDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    //    @GetMapping("/signUp")
    //    public String signUp() {
    //        return "/signUp";
    //    }
    //    @PostMapping("/signUp")
//    public String signUp(@Validated UserDTO userDTO, Errors errors, HttpServletResponse resp, Model model) {
//        // post요청시 넘어온 user 입력값에서 Validation에 걸리는 경우
//        if(errors.hasErrors()) {
//            // 회원 가입 실패시, 입력 데이터를 유지
//            model.addAttribute("userDTO", userDTO);
//
//            // 유효성 통과 못한 필드와 메시지를 핸들링
//            // 회원가입 실패시 message 값들을 모델에 매핑해서 View로 전달
//            Map<String, String> validatorResult = userService.validateHandling(errors);
//
//
//            // map.keySet() -> 모든 key값을 갖고온다.
//            // 그 갖고온 키로 반복문을 통해 키와 에러 메세지로 매핑
//            for (String key: validatorResult.keySet()
//                 ) {
//                // ex) model.addAtrribute("valid_id", "아이디는 필수 입력사항 입니다.")
//                model.addAttribute(key,validatorResult.get(key));
//            }
//            return "/signUp";
//        }
//        if(userService.signUp(userDTO)) {
//            log.info("result : " + userDTO.getUserId());
//            log.info("result : " + userDTO.getUserEmail());
//
//            Cookie cookie = new Cookie("userEmail", userDTO.getUserEmail());
//            // 30분
//            cookie.setMaxAge(1800);
//            resp.addCookie(cookie);
//
//
//            model.addAttribute("userEmail", userDTO.getUserEmail());
//
//        }
//        return "redirect:/";
//    }

    /**
     * 회원 가입 API
     * @return ResponseEntity<UserResponse> 201 Created, 가입된 회원의 정보
     */
    @PostMapping("/")
    @Tag(name = "user check")
    @Operation(summary = "회원가입 API", description = "회원가입하는 API입니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "201", description = "회원가입 성공"),
            @ApiResponse(responseCode = "400", description = "잘못된 요청")
    })
    public ResponseEntity<String> signUp(@Validated @RequestBody UserDTO userDTO, Errors errors, HttpServletResponse resp) {


        // post요청시 넘어온 user 입력값에서 Validation에 걸리는 경우
        if (errors.hasErrors()) {
            // 유효성 통과 못한 필드와 메시지를 핸들링
            // 회원가입 실패시 message 값들을 모델에 매핑해서 View로 전달
            Map<String, String> validatorResult = userService.validateHandling(errors);
            // map.keySet() -> 모든 key값을 갖고온다.
            // 그 갖고온 키로 반복문을 통해 키와 에러 메세지로 매핑
            for (String key : validatorResult.keySet()
            ) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validatorResult.get(key));
            }
        }
        if (userService.signUp(userDTO)) {
            log.info("result : " + userDTO.getUserId());
            log.info("result : " + userDTO.getUserEmail());

            Cookie cookie = new Cookie("userEmail", userDTO.getUserEmail());
            // 30분
            cookie.setMaxAge(1800);
            resp.addCookie(cookie);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("회원가입 성공했습니다.");
    }

//    @GetMapping("/login")
//    public String loginForm(@CookieValue("userEmail") String userEmail, Model model) {
//        if(userEmail == null) {
//            return "/login";
//        } else {
//            model.addAttribute("loginEmail", userEmail);
//            log.info(userEmail);
//            return "/login";
//        }
//    }
//
//
//    @PostMapping("/login")
//    public String login(String userEmail, String userPw, HttpSession session, Model model) {
//        UserDTO user =  userService.login(userEmail, userPw);
//
//        if(user != null) {
//            session.setAttribute("userId", user.getUserId());
//            session.setAttribute("userEmail", user.getUserEmail());
//        }
//        return "home";
//    }

    // 로그인
    @PostMapping("/loginUser")
    @Tag(name = "user check")
    @Operation(summary = "로그인 API", description = "로그인하는 API입니다.")
    @ApiResponse(responseCode = "200", description = "로그인 성공")
    public String login(@RequestBody UserDTO userDTO, HttpSession session) {
        UserDTO loginUser = userService.login(userDTO.getUserEmail(), userDTO.getUserPw());
        if (loginUser != null) {
            session.setAttribute("userId", loginUser.getUserId());
            session.setAttribute("userEmail", loginUser.getUserEmail());
            return "로그인에 성공했습니다.";
        }
        return "아이디가 없습니다.";
    }

    //    @PostMapping("/logOut")
//    public String logOut(HttpServletRequest req) {
//        req.getSession().invalidate();
//        return "redirect:/";
//    }
    @GetMapping("/logOut")
    @Tag(name = "user check")
    @Operation(summary = "로그아웃 API", description = "로그아웃 하는 API입니다.")
    @ApiResponse(responseCode = "200", description = "로그아웃 성공")
    public String logOut(HttpServletRequest req) {
        req.getSession().invalidate();
        return "로그아웃 하셨습니다";
    }

    // 회원 정보 수정
    @PutMapping("/{userId}")
    @Tag(name = "user check")
    @Operation(summary = "수정 API", description = "유저 정보를 수정하는 API입니다.")
    @ApiResponse(responseCode = "201", description = "수정 성공")
    public ResponseEntity<?> update(@PathVariable Long userId, @RequestBody UserDTO userDTO) {
        Long userIdCheck = userDTO.getUserId();

        if(userIdCheck == userId) {
            userService.update(userDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(userDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }


    }

//    @GetMapping("/remove")
//    public String remove() {
//        return "/remove";
//    }
//
//    @PostMapping("/remove")
//    public String remove(String userEmail, String userPw) {
//        log.info("아이디 : " + userEmail);
//        log.info("비밀번호 : " + userPw);
//
//        UserDTO user = userService.remove(userEmail, userPw);
//        if(user != null) {
//            return "redirect:/";
//        } else {
//            return "/remove";
//        }
//    }

    // 회원 탈퇴(삭제) API
    // 204 : NO_CONTENT
    @DeleteMapping("/{userId}")
    @Tag(name = "user check")
    @Operation(summary = "삭제 API", description = "유저를 삭제하는 API입니다.")
    @ApiResponse(responseCode = "204", description = "삭제 성공")
    public ResponseEntity<Object> delete(@PathVariable Long userId) {
        userService.delete(userId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    // 중복체크
    @PostMapping("/email-check/{userEmail}")
    @Tag(name = "user check")
    @Operation(summary = "중복체크 API", description = "userEmail이 중복인지 체크하는 API입니다.")
    @ApiResponse(responseCode = "200", description = "중복체크 성공")
    // ajax를 쓸 때는 반드시 @ResponseBody를 써야한다.
    public int emailCheck(@PathVariable String userEmail) {
        log.info("userEmail : " + userEmail);
        int emailCheck = userService.emailCheck(userEmail);

        if(emailCheck != 0) {
            throw new IllegalStateException("이미 가입된 회원입니다.");
        } else {
            return 0;
        }
    }


}
