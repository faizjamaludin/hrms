<template>
  <div class="flex flex-col gap-6 h-full w-full">
    <!-- title -->
    <h2 class="text-text-title text-2xl font-bold">Employee Dashboard</h2>

    <!-- cards -->
    <div class="flex flex-row gap-6">
      <!-- user details -->
      <div
        class="w-[22.521rem] border border-border bg-white rounded flex flex-col shadow"
      >
        <div class="px-4 py-5 bg-[#212529] flex flex-row">
          <!-- avatar -->

          <!-- name and position -->
          <div class="flex flex-col text-white">
            <h5 class="font-semibold text-base mb-1">Faiz Jamaludin</h5>
            <p class="text-xs">Software Developer</p>
          </div>
        </div>
        <div class="flex flex-col p-5">
          <!-- phone number -->
          <div class="flex flex-col mb-3">
            <span class="text-text-secondary text-2sm">Phone Number</span>
            <p class="text-sm text-text-primary">+60 13 454 9584</p>
          </div>

          <!-- email -->
          <div class="flex flex-col mb-3">
            <span class="text-text-secondary text-2sm">Email Address</span>
            <p class="text-sm text-text-primary">faiz.jamaludin02@gmail.com</p>
          </div>

          <!-- Report office -->
          <div class="flex flex-col mb-3">
            <span class="text-text-secondary text-2sm">Report Office</span>
            <p class="text-sm text-text-primary">Cara Com My</p>
          </div>

          <!-- joined on -->
          <div class="flex flex-col mb-3">
            <span class="text-text-secondary text-2sm">Joined On</span>
            <p class="text-sm text-text-primary">1 August 2025</p>
          </div>
        </div>
      </div>

      <!-- leave details -->
      <div
        class="flex flex-col bg-white border border-border rounded w-[28.557rem] shadow"
      >
        <!-- title -->
        <div class="flex flex-row justify-between text-text-title px-4 py-5">
          <h5 class="text-base font-semibold">Leave Details</h5>
        </div>

        <Separator class="" />

        <!-- chart -->
        <div class="p-5">test</div>
      </div>

      <!-- leave summary -->
      <div
        class="flex flex-col bg-white border border-border rounded w-[16.484rem] shadow"
      >
        <!-- title -->
        <div class="flex flex-row justify-between text-text-title px-4 py-5">
          <h5 class="text-base font-semibold">Leave Details</h5>
        </div>

        <Separator class="" />

        <div class="grid grid-cols-2 p-5">
          <!-- total leaves -->
          <div class="mb-3">
            <span class="text-text-secondary text-sm">Total Leaves</span>
            <h4 class="text-lg text-text-title font-semibold">16</h4>
          </div>

          <!-- taken  -->
          <div class="mb-3">
            <span class="text-text-secondary text-sm">Taken</span>
            <h4 class="text-lg text-text-title font-semibold">10</h4>
          </div>

          <!-- absent -->
          <div class="mb-3">
            <span class="text-text-secondary text-sm">Absent</span>
            <h4 class="text-lg text-text-title font-semibold">2</h4>
          </div>

          <!-- request -->
          <div class="mb-3">
            <span class="text-text-secondary text-sm">Request</span>
            <h4 class="text-lg text-text-title font-semibold">0</h4>
          </div>

          <!-- Worked day -->
          <div class="mb-3">
            <span class="text-text-secondary text-sm">Worked Days</span>
            <h4 class="text-lg text-text-title font-semibold">243</h4>
          </div>

          <!-- Loss of pay -->
          <div class="mb-3">
            <span class="text-text-secondary text-sm">Loss of Pay</span>
            <h4 class="text-lg text-text-title font-semibold">2</h4>
          </div>

          <div class="col-span-2">
            <Button class="w-full">Apply New Leave</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
</script>
