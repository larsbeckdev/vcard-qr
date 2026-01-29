<script setup lang="ts">
import { computed } from "vue";
import type { VCardData } from "@/features/vcard-qr/types/vcard";

import {
  NCard,
  NForm,
  NFormItem,
  NInput,
  NGrid,
  NGridItem,
  NButton,
} from "naive-ui";

const props = defineProps<{ modelValue: VCardData }>();
const emit = defineEmits<{
  (e: "update:modelValue", value: VCardData): void;
  (e: "clear"): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (val: VCardData) => emit("update:modelValue", val),
});

function update<K extends keyof VCardData>(key: K, value: VCardData[K]) {
  model.value = { ...model.value, [key]: value };
}
</script>

<template>
  <n-card title="Contact" size="medium">
    <template #header-extra>
      <n-button type="error" secondary @click="emit('clear')">Clear</n-button>
    </template>

    <n-form :model="model" label-placement="top">
      <n-grid :cols="2" :x-gap="12" :y-gap="12" responsive="screen">
        <n-grid-item>
          <n-form-item label="First name">
            <n-input
              :value="model.firstName"
              autocomplete="given-name"
              @update:value="(v) => update('firstName', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Last name">
            <n-input
              :value="model.lastName"
              autocomplete="family-name"
              @update:value="(v) => update('lastName', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Company">
            <n-input
              :value="model.org"
              autocomplete="organization"
              @update:value="(v) => update('org', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Title">
            <n-input
              :value="model.title"
              autocomplete="organization-title"
              @update:value="(v) => update('title', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Phone">
            <n-input
              :value="model.phone"
              autocomplete="tel"
              @update:value="(v) => update('phone', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Email">
            <n-input
              :value="model.email"
              autocomplete="email"
              @update:value="(v) => update('email', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item :span="2">
          <n-form-item label="Website">
            <n-input
              :value="model.website"
              autocomplete="url"
              placeholder="https://…"
              @update:value="(v) => update('website', v)" />
          </n-form-item>
        </n-grid-item>
      </n-grid>

      <n-card title="Address" size="small" style="margin-top: 12px">
        <n-grid :cols="2" :x-gap="12" :y-gap="12" responsive="screen">
          <n-grid-item :span="2">
            <n-form-item label="Street">
              <n-input
                :value="model.street"
                autocomplete="street-address"
                @update:value="(v) => update('street', v)" />
            </n-form-item>
          </n-grid-item>

          <n-grid-item>
            <n-form-item label="ZIP">
              <n-input
                :value="model.zip"
                autocomplete="postal-code"
                @update:value="(v) => update('zip', v)" />
            </n-form-item>
          </n-grid-item>

          <n-grid-item>
            <n-form-item label="City">
              <n-input
                :value="model.city"
                autocomplete="address-level2"
                @update:value="(v) => update('city', v)" />
            </n-form-item>
          </n-grid-item>

          <n-grid-item :span="2">
            <n-form-item label="Country">
              <n-input
                :value="model.country"
                autocomplete="country-name"
                @update:value="(v) => update('country', v)" />
            </n-form-item>
          </n-grid-item>
        </n-grid>
      </n-card>

      <n-form-item label="Note" style="margin-top: 12px">
        <n-input
          type="textarea"
          :value="model.note"
          :autosize="{ minRows: 3, maxRows: 6 }"
          @update:value="(v) => update('note', v)" />
      </n-form-item>
    </n-form>
  </n-card>
</template>
