<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Important Mails</h5>
        <div>
          <DataTable :value="messages" stripedRows responsiveLayout="scroll">
            <template #header>
              <div class="table-header flex justify-content-between">
                <p>Important Emails in your Inbox</p>
                <Button icon="pi pi-refresh" />
              </div>
            </template>
            <Column field="subject" header="Subject"></Column>
            <Column field="date" header="Date">
              <template #body="slotProps">
                {{ filteredDate(slotProps.data.date) }}
              </template>
            </Column>
            <Column field="from.name" header="Sender Name"></Column>
            <Column field="from.email" header="Sender Email"></Column>
            <Column header="Actions">
              <template #body="slotProps">
                {{ filteredDate(slotProps.data.date) }}
                <span class="p-buttonset">
                <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" />
                <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" />
                <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-outlined" />
                </span>
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Messages from "../data/messages";
import moment from 'moment';

export default {
  name: "ImportantEmail",
  data() {
    return {
      messages: Messages,
    };
  },
  setup() {
    const filteredDate = (value) => {
      return moment(value).format("MMM Do YY");
    }
    return {
      filteredDate
    }
  }
};
</script>

<style scoped></style>
