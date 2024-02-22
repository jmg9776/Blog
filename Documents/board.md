# 보드 도메인 명세서

## 개요
보드 도메인은 게시판 애플리케이션의 핵심으로, 게시글, 게시판, 카테고리의 정보 관리 및 관련 작업을 담당합니다. 이 도메인은 사용자가 정보를 주고받을 수 있는 구조적인 플랫폼을 제공합니다.

## 모델 설명
- **BoardPost**: 사용자의 게시글을 나타내며, 내용, 작성자, 게시일 등의 정보를 포함합니다.
- **BoardCategory**: 게시판의 분류를 나타내며, 각 카테고리는 하나 이상의 게시판을 포함할 수 있습니다.
- **Board**: 실제 게시판을 나타내며, 여러 게시글과 카테고리 정보를 포함합니다.

## 리포지토리 설명
- **BoardPostRepository**: 게시글과 관련된 데이터베이스 작업을 담당합니다.
- **BoardRepository**: 게시판과 관련된 데이터베이스 작업을 담당합니다.
- **BoardInfoRepository**: 보드의 상세 정보 조회에 특화된 쿼리를 제공합니다.
- **BoardCategoryRepository**: 카테고리와 관련된 데이터베이스 작업을 담당합니다.

## 사용 사례
- **사용자**:
    - 게시판에서 게시글을 작성, 조회, 수정, 삭제할 수 있습니다.
- **관리자**:
    - 게시판을 생성, 수정, 삭제할 수 있으며, 카테고리를 관리할 수 있습니다.
- **일반 사용자**:
    - 다양한 카테고리의 게시판을 탐색하고, 관심 있는 게시글에 접근할 수 있습니다.