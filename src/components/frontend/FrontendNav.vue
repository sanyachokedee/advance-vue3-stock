<template>
	<header class="w-full fixed bg-emerald-700 md:bg-white dark:bg-black">
		<div
			class="container md:flex md:items-center md:justify-between px-4 py-4 auto md:my-2"
		>
			<!-- Start Header -->
			<div class="flex item-center justify-between">
				<div>
					<router-link to="/"
						><img src="@/assets/img/logo.svg" alt="Logo"
					/></router-link>
				</div>
				<div class="md:hidden">
					<a href="#0" @click="toggleMenu">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div class="space-x-6 font-medium md:block">
				<ul
					:class="showMenu ? 'flex' : 'hidden'"
					class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:item-center md:space-x-4 md:mt-0 text-center"
				>
					<li>
						<router-link
							to="/"
							class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700 dark:text-white"
							>Home</router-link
						>
					</li>
					<li>
						<router-link
							to="/features"
							class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700 dark:text-white"
							>Features</router-link
						>
					</li>
					<li>
						<router-link
							to="/services"
							class="transition-colors duration-200  text-gray-100 md:text-black hover:text-emerald-700 dark:text-white"
							>Services</router-link
						>
					</li>
					<li>
						<router-link
							to="/testimonials"
							class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700 dark:text-white"
							>Testimoials</router-link
						>
					</li>
					<li>
						<router-link
							to="/contact"
							class="transition-colors duration-200 text-gray-100 md:text-black hover:text-emerald-700 dark:text-white"
							>Contact</router-link
						>
					</li>
					<li>
						<router-link to="/getstarted">
							<button
								class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-2.5 rounded-lg text-white font-semibold  dark:text-white"
							>
								Get Started
							</button>
						</router-link>
					</li>
					<li>
						<button class="px-4 py-2 text-black dark:text-white" @click = "toggleDark()">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</button>
					</li>
				</ul>
			</div>
		</div>
	</header>
	<!-- End Header -->
</template>

<script setup lang="ts">
	// Toglge menu hamberger
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const showMenu = ref(false)

//method Toggle Menu
const toggleMenu = () => { showMenu.value = !showMenu.value }

const isDark = useDark()
const toggleDark = useToggle(isDark)


</script>

<style scoped>
	

</style>
