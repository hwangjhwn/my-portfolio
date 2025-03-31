Cording Style Guide V1.1
- 문서 관리자 : bigtiger -

실무자들 간의 원활한 협업을 위해 코딩 스타일 가이드를 사내 업무 시스템에 도입합니다.
아래 기재된 가이드를 숙지하여 업무에 적용해 주시기 바랍니다.
본 스타일 가이드에 추가로 제안해 주실 사항은 문서 관리자인 bitgier에게 전달해 주시면 검토 후 업데이트하도록 하겠습니다.
* 2023년 9월부터 퍼블리싱 전담이 디자인팀에서 프론트엔드팀으로 넘어가는 관계로 새로운 문서 관리자가 필요합니다.



//파일명 작성법
파일명은 파스칼 케이스를 기반으로 작성합니다.
동사 + 명사 조합으로 사용해 주시고, 단어 첫 글자는 대문자로 표기해 주시기 바랍니다.
파일명에는 언더바와 축약어를 사용하지 않습니다.
ex. BaseTable

등록페이지와 수정페이지는 한 페이지로 개발이 되는 관계로 앞의 동사를 Save로 통일합니다.
기존에 따로 분리해두었던 2페이지는 하나로 통합하여 생성해 주시기 바랍니다.
ex. RegisterProfile, ModifyProfile -> "SaveProfile" 하나로 통일



//클래스명 작성법
클래스명은 카멜 케이스를 기반으로 작성합니다.
중간에 들어가는 단어는 대문자로 처리해 주시고 최대한 직관적으로 작성해 주시기 바랍니다.
클래스명에는 축약어를 사용하지 않습니다.
ex. productList

공통적으로 사용되는 c/container/wrap/section/inner/list 언더바로 구분합니다.
ex. productList_wrap

스타일 속성과 연관된 스타일을 부여할 경우에는 대쉬로 구분합니다.
ex. productList_wrap-row

각 영역을 나눌때는 "c_section" 클래스로 영역을 나눠줍니다.
컨텐츠를 감쌀때는 클래스명 단어 뒤에 "_container"를 붙이시고, 반복적인 요소에는 "_wrap"을 붙여주세요.



//컴포넌트명 작성법
컴포넌트는 카멜 케이스 방식으로 컴포넌트명을 작성합니다.
ex. ComponentName



//이미지 파일명 작성법
순수하게 아이콘의 역할만 하는 요소에만 “icon_”을 붙여주시기 바랍니다.
컨텐츠 영역에 노출되는 이미지는 일러스트 또는 사진 형식에 무관하게 “img_”를 사용해 주시기 바랍니다.
ex. icon_name / ex. img_name

공통으로 들어가는 코드에서 사용하는 이미지와 다른 일반적인 요소에 사용되는 이미지가 같을 경우 추후 원활한 수정을 위해 분리해 주시기 바랍니다.
예를 들어, 헤더 메뉴에 있는 아이콘이 다른 페이지의 아이콘과 동일하여 같이 사용할 경우 추후 재수정이 필요할 수 있습니다.
이와 같이 독립적인 영역에 사용되어지는 이미지는 어디에 사용되는 이미지인지 직관적으로 표현해 주면 작업자가 찾기 쉬워집니다.
ex. icon_header_name



//CSS 작성법
기본적으로 계단형식으로 작성합니다.
ex.
.companyVision {
	margin: auto;
}
.companyVision .text_wrap {
	font-size: 12px;
}
.companyVision .text_wrap .title {
	font-size: 20px;
}

여러 요소에서 공통적으로 재사용되는 클래스는 상위 부모 요소를 타지 않도록 작성합니다.
ex.
.notice_wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-mid);
	width: 100%;
	min-height: 6rem;
	padding: var(--space-mid) 0;
	box-sizing: border-box;
}

개인의 스타일을 남발할 경우 중구난방이 될 수 있으므로 CSS 작성순서는 가급적 아래와 같은 형식을 지켜주시기 바랍니다.
CSS순서는 레이아웃을 이루는데 있어 힘이 강한 속성이 상위에 위치하게 됩니다.
.sample {
	content				/* 가상클래스 사용 시 최상단 위치 */
	z-index				/* 일반적 요소에 대해 최상단 위치 */
	position			/* position - 관련속성은 하단에 위치 */
	top
	left
	transform
	float				/* float (사용 비권장) */
	overflow			/* overflow */
	display				/* display - 관련속성은 하단에 위치 */
	flex-direction
	flex-wrap
	flex-basis
	flex-grow
	flex-shrink
	align-items
	justify-content
	gap
	width				/* width - 밀접한 min-width max-width 등 속성은 하단에 위치 */
	min-width
	max-width
	height
	min-height
	max-height
	margin
	padding
	font-family			/* font - family가 필요할 경우에 사용 */
	font-size
	font-weight
	line-height
	word-break
	word-spacing
	text-align			/* text */
	text-decoration
	text-indent
	text-overflow
	color				/* color */
	background			/* background */
	border				/* border */
	border-radius
	box-sizing			/* box */
	box-shadow
	cursor
	transition			/* transition 모션관련 속성은 위 선언된 속성을 기반으로 한 부가적인 요소이므로 최하단에 위치 */
	animation
}

- webkit 속성은 관련 속성 하단에 작성해 주시기 바랍니다.

z-index를 사용할 경우 해당되는 항목의 index값으로 작성해 주시기 바랍니다.

1. splash 			100
2. spinner			90
3. modal			80
4. modal(confirm)	70
5. header			50
6. bottom			50
7. side menu		50
8. ToTop			30
9. ToolTip			20

- header / bottom / side menu 부분은 디자인에 따라 변경하여 사용해 주시기 바랍니다. 현재는 50으로 통일되어 있으나 60 또는 70을 추가하여 세분화할 수 있습니다.
- 기타 디자인 요소에 사용되는 index는 10번대를 사용해주시기 바랍니다.
- 작업하시다보면 z-index가 있어야만 요소가 노출되는 상황이 발생할 수 있습니다. 이럴 경우 index값은 1로 지정해 주시기 바랍니다.



//주석 작성법
태그 시작과 끝에는 다음과 같이 주석 처리를 해주시기 바랍니다. 가급적 주석 처리하려는 최상위 태그의 클래스명을 따라가주세요.
구분을 위해 START END는 대문자로 표기합니다.
ex. <!-- contents_name START -->
ex. <!-- contents_name END -->

START 주석 바로 아랫줄에 코멘트 주석을 추가할 수 있습니다.
코멘트에는 작업의도 등 작업자가 알고 있으면 도움이 될 사항들을 기록해 주세요.
코멘트는 간단하게 남기는 용도이며, 보다 자세하고 긴 내용의 서술이 필요할 경우 "README.md"를 통해 확인해 주세요. (추후 노션 도입될 수 있음)
ex. <!-- comment : 코멘트 문구를 작성해 주세요. -->



//기타 항목
- 사용하지 않는 페이지는 파일명 앞에 "(unused)"를 붙여주시기 바랍니다.
- 퍼블리싱이 끝나고 unused 파일은 필요할 경우 개인이 백업해 주시고 개발팀에 소스 전달할때는 모두 삭제하여 전달해 주시기 바랍니다.
- 이미지는 가급적 background CSS가 아닌 태그를 사용하여 적용해 주시기 바랍니다.



아래는 예시 코드입니다.
<!-- notice_container START -->
<!-- comment : 
	코멘트 문구를 작성해 주세요.
-->
<div class="notice_container">
    <select>
        <option>카테고리1</option>
        <option>카테고리2</option>
    </select>
    <div class="notice_list">
        <div class="notice_wrap" v-for="i in idx" :key="i">
            <p class="title">제목</p>
            <p class="date">날짜</p>
        </div>
    </div>
</div>
<!-- notice_container END -->



만약 위와 같은 상황에서 디자인을 위해 태그로 감싸야하는 경우 클래스명에 스타일을 직관적으로 표기하여 태그를 작성해주세요.
<!-- notice_container START -->
<!-- comment : 
	코멘트 문구를 작성해 주세요.
-->
<div class="notice_container">
	<div class="fillBackground"> <!-- 디자인을 위해 추가된 태그 -->
		<select>
			<option>카테고리1</option>
			<option>카테고리2</option>
		</select>
		<div class="notice_list">
			<div class="notice_wrap" v-for="i in idx" :key="i">
				<p class="title">제목</p>
				<p class="date">날짜</p>
			</div>
		</div>
	</div>
</div>
<!-- notice_container END -->



----------------------------------------------------------------
가이드는 여기까지 입니다.