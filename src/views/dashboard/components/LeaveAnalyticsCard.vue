<template>
  <div
    class="flex flex-col bg-white border border-border rounded w-5/12 shadow"
  >
    <!-- title -->
    <div class="flex flex-row justify-between text-text-title px-4 py-5">
      <h5 class="text-base font-semibold">Leave Details</h5>
    </div>

    <Separator />

    <!-- chart -->
    <div class="p-5">
      <DonutChart
        index="name"
        :category="'total'"
        :data="data"
        :type="'donut'"
        :show-legend="true"
        :colors="['#0c4b5e', '#f26522', '#ffc107', '#e70d0d', '#03c95a']"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { DonutChart } from "@/components/ui/chart-donut";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
];
</script>
