# 시작하기

## 1. 문제 풀기

백준, 해커랭크, 리트코드 등 온라인 저지 사이트에서 문제를 풀어주세요.

### 추천 온라인 저지
* [리트코드 TOP 100](https://leetcode.com/problemset/top-100-liked-questions/)
* [해커랭크](https://www.hackerrank.com/)
* [프로그래머스 코딩테스트 고득점 Kit](https://programmers.co.kr/learn/challenges)

## 2. 폴더 및 파일 생성하기

여러분의 로컬 저장소에 폴더와 피일을 생성해주세요.

파일과 폴더 구조 규칙은 아래와 같습니다.

`${플랫폼}/${문제}/${깃허브 아이디}`

** 띄어쓰기는 `_`로 합니다.

예시)
 * `프로그래머스/해시/edegiil.js`
 * `해커랭크/MinMav/edegiil.cpp`
 * `리트코드/ABCsong/edegiil.py`

![파일 및 폴더구조 예시](https://user-images.githubusercontent.com/35324795/114189507-3abb8500-9985-11eb-92d6-f476f1a58d24.png)

## 3. Git 푸시하기

브랜치는 `main` 브랜치가 아닌 여러분의 깃허브 아이디로 만들어진 브랜치를 이용해주세요.

```bash
$ git checkout -b <깃허브 아이디> // 최초 생성시
$ git checkout <깃허브 아이디> // 브랜치 이동
```

여러분의 깃허브 아이디로 된 브랜치에서 파일을 작성하고 push 해주세요.

```bash
$ git add <문제 파일 상대경로>
$ git commit -m '프로그래머스 완주하지 못한 선수'
$ git push origin <깃허브 아이디>
```

## 4. Pull Request 하기

push를 하고 나서 [GitHub 저장소](https://github.com/peacemain-club/Algorithm)로 이동해주세요.

![image](https://user-images.githubusercontent.com/35324795/114190403-3b085000-9986-11eb-8385-497fe12aa403.png)

이런 창이 뜰텐데 `Compare & pull request` 버튼을 눌러주세요.

아래 사진에 따라 모든 절차를 다 마쳐주세요.

![절차](https://user-images.githubusercontent.com/35324795/114191770-bcacad80-9987-11eb-9f4a-09bb76e21d1d.png)

완료 후 버튼을 누르면 아래와 같은 화면이 뜹니다.

![결과](https://user-images.githubusercontent.com/35324795/114191656-9dae1b80-9987-11eb-8b0e-a720fd1a3c4a.png)

이제 관리자가 확인 후 또는 코드리뷰 밋업 때 리뷰하고나서 Approve가 되어서 저장소에 올라오게 됩니다.
