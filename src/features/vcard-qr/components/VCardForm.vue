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
  NDivider,
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
  <n-card title="Contact" size="small">
    <template #header-extra>
      <n-button size="small" type="error" secondary @click="emit('clear')">
        Clear
      </n-button>
    </template>

    <n-form
      :model="model"
      label-placement="top"
      size="small"
      class="compact-form">
      <n-grid :cols="2" :x-gap="12" :y-gap="0" responsive="screen">
        <n-grid-item>
          <n-form-item label="Prefix">
            <n-input
              :value="model.prefix"
              autocomplete="honorific-prefix"
              placeholder="Dr., Mr., Mrs."
              @update:value="(v) => update('prefix', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Suffix">
            <n-input
              :value="model.suffix"
              autocomplete="honorific-suffix"
              placeholder="Jr., Sr., III"
              @update:value="(v) => update('suffix', v)" />
          </n-form-item>
        </n-grid-item>

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
          <n-form-item label="Middle name">
            <n-input
              :value="model.middleName"
              autocomplete="additional-name"
              @update:value="(v) => update('middleName', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Nickname">
            <n-input
              :value="model.nickname"
              @update:value="(v) => update('nickname', v)" />
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
          <n-form-item label="Department">
            <n-input
              :value="model.department"
              @update:value="(v) => update('department', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item :span="2">
          <n-form-item label="Title">
            <n-input
              :value="model.title"
              autocomplete="organization-title"
              @update:value="(v) => update('title', v)" />
          </n-form-item>
        </n-grid-item>
      </n-grid>

      <!-- Phone -->
      <n-divider title-placement="left">Phone</n-divider>

      <n-grid :cols="2" :x-gap="12" :y-gap="0" responsive="screen">
        <n-grid-item>
          <n-form-item label="Mobile">
            <n-input
              :value="model.phoneCell"
              autocomplete="tel"
              @update:value="(v) => update('phoneCell', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Work">
            <n-input
              :value="model.phoneWork"
              @update:value="(v) => update('phoneWork', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Home">
            <n-input
              :value="model.phoneHome"
              @update:value="(v) => update('phoneHome', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Fax">
            <n-input
              :value="model.fax"
              @update:value="(v) => update('fax', v)" />
          </n-form-item>
        </n-grid-item>
      </n-grid>

      <!-- Email & Web -->
      <n-divider title-placement="left">Email & Web</n-divider>

      <n-grid :cols="2" :x-gap="12" :y-gap="0" responsive="screen">
        <n-grid-item>
          <n-form-item label="Email (personal)">
            <n-input
              :value="model.email"
              autocomplete="email"
              @update:value="(v) => update('email', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Email (work)">
            <n-input
              :value="model.emailWork"
              @update:value="(v) => update('emailWork', v)" />
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

      <!-- Home address -->
      <n-divider title-placement="left">Home address</n-divider>

      <n-grid :cols="2" :x-gap="12" :y-gap="0" responsive="screen">
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

        <n-grid-item>
          <n-form-item label="State / Region">
            <n-input
              :value="model.state"
              autocomplete="address-level1"
              @update:value="(v) => update('state', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Country">
            <n-input
              :value="model.country"
              autocomplete="country-name"
              @update:value="(v) => update('country', v)" />
          </n-form-item>
        </n-grid-item>
      </n-grid>

      <!-- Work address -->
      <n-divider title-placement="left">Work address</n-divider>

      <n-grid :cols="2" :x-gap="12" :y-gap="0" responsive="screen">
        <n-grid-item :span="2">
          <n-form-item label="Street">
            <n-input
              :value="model.workStreet"
              @update:value="(v) => update('workStreet', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="ZIP">
            <n-input
              :value="model.workZip"
              @update:value="(v) => update('workZip', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="City">
            <n-input
              :value="model.workCity"
              @update:value="(v) => update('workCity', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="State / Region">
            <n-input
              :value="model.workState"
              @update:value="(v) => update('workState', v)" />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Country">
            <n-input
              :value="model.workCountry"
              @update:value="(v) => update('workCountry', v)" />
          </n-form-item>
        </n-grid-item>
      </n-grid>

      <!-- Other -->
      <n-divider title-placement="left">Other</n-divider>

      <n-grid :cols="2" :x-gap="12" :y-gap="0" responsive="screen">
        <n-grid-item :span="2">
          <n-form-item label="Birthday">
            <n-input
              :value="model.birthday"
              placeholder="YYYY-MM-DD"
              @update:value="(v) => update('birthday', v)" />
          </n-form-item>
        </n-grid-item>
      </n-grid>

      <n-form-item label="Note">
        <n-input
          type="textarea"
          :value="model.note"
          :autosize="{ minRows: 2, maxRows: 5 }"
          @update:value="(v) => update('note', v)" />
      </n-form-item>
    </n-form>
  </n-card>
</template>

<style scoped>
.compact-form :deep(.n-form-item) {
  margin-bottom: 2px;
}

.compact-form :deep(.n-form-item-label) {
  padding-bottom: 0;
  font-size: 12px;
}

.compact-form :deep(.n-divider) {
  margin: 8px 0 4px;
}
</style>
