<template>
  <header
    class="flex flex-row justify-between sticky top-0 bg-background h-12 shrink-0 items-center border-b px-4"
  >
    <div class="flex flex-row gap-2 items-center text-text-secondary">
      <SidebarTrigger />
      <div class="relative w-full max-w-sm items-center">
        <Input
          id="search"
          type="text"
          placeholder="Search..."
          class="pl-10 w-64"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-4 text-muted-foreground" />
        </span>
      </div>
    </div>

    <!-- notification and user profile -->
    <div class="flex flex-row gap-2 items-center text-text-secondary">
      <Button variant="ghost" size="icon" class="h-7 w-7"><Bell /></Button>
      <Avatar>
        <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  </header>
</template>

<script setup lang="ts">
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>
