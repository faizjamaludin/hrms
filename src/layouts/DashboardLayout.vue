<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <SidebarHeader />
      <main class="flex flex-1 flex-col gap-4 p-4 bg-[#f8f9fa]">
        <slot />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import AppSidebar from "@/components/sidebar/AppSidebar.vue";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SidebarHeader from "./components/SidebarHeader.vue";
</script>
