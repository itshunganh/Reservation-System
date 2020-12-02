<template>
    <div id="guide" class="guide text-center container">
        <br>
        <b-card>
            <h1 class="display-3 py-3">FAQs</h1>
            <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="link">How To Make A Reservation</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text>You can make a reservation simply by clicking on the &nbsp;<button class="btn btn-primary btn-sm">RESERVE</button> &nbsp;button.</b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="link">How To Update Your Reservation</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text>After making a reservation, you can update it simply by clicking on the <img src="../assets/update.svg"> icon under <b>Action</b> column.</b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="link">How To Cancel Your Reservation</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text>After making a reservation, you can cancel it simply by clicking on the <img src="../assets/delete.svg"> icon under <b>Action</b> column.</b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>
            </div>
            <br>
            <a class="btn btn-secondary btn-sm btn-block" href="/" role="button">RETURN</a>
        </b-card>
    </div>
</template>

<script>
export default {
  }
</script>

<style>
</style>