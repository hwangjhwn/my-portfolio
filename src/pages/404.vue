<template>
	<div class="error404">
		<div class="illust_wrap">
			<!-- <img src="@/assets/image/common/illust_error.svg" alt="" /> -->
		</div>
		<h1 class="headline">404</h1>
		<p class="subtitle1">존재하지 않는 페이지입니다.</p>
		<div class="c_fixed_wrap" style="background-color: var(--color-base-brand)">
			<router-link to="/" class="c_btn-primary c_btn-s-large">
				<p>돌아가기</p>
			</router-link>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
	.error404 {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		background-color: var(--color-base-brand);
		margin-top: 0;
		padding: 0;
	}
	.error404 .illust_wrap {
		width: 24rem;
		height: 24rem;
		/* border:1px solid blue; */
	}
	.error404 .headline {
		color: var(--color-secondary);
	}
	.error404 .subtitle1 {
		color: var(--font-color-mid);
	}
	.c_fixed_wrap {
		background-color: #f7f7f0;
		margin-top: 2rem;
	}
</style>
