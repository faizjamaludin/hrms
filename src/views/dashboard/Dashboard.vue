<template>
  <div class="flex flex-col gap-6 h-full w-full">
    <!-- title -->
    <h2 class="text-text-title text-2xl font-bold">Employee Dashboard</h2>

    <!-- cards -->
    <div class="flex flex-row gap-6">
      <!-- profile card -->
      <ProfileCard />

      <!-- leave details -->
      <LeaveAnalyticsCard />

      <!-- leave overview -->
      <LeaveOverviewCard />
    </div>

    <div class="flex flex-row gap-6">
      <!-- attendance -->
      <div
        class="w-4/12 border border-[#f26522] bg-[#fff8f4] rounded flex flex-col items-center shadow"
      >
        <h6 class="text-text-secondary font-medium text-sm">Attendance</h6>
        <h4 class="text-lg text-text-title font-bold">08:35 AM, 11 Mar 2025</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileCard from "./components/ProfileCard.vue";
import LeaveOverviewCard from "./components/LeaveOverviewCard.vue";
import LeaveAnalyticsCard from "./components/LeaveAnalyticsCard.vue";
</script>
