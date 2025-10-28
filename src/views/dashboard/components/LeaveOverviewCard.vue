<template>
  <div
    class="flex flex-col bg-white border border-border rounded w-3/12 shadow"
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
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
</script>
