<template>
  <!--User Dashboard-->
  <section class="sptb">
    <div class="container">
      <div class="row">
        <sidebar></sidebar>
        <div class="col-xl-9 col-lg-12 col-md-12">
          <div class="card mb-0">
            <div class="card-header">
              <h3 class="card-title">Edit Profile</h3>
            </div>
            <div class="card-body">
              <form
                action=""
                @submit.prevent="setUpdateUser(user)"
                enctype="multipart/form-data"
              >
                <div class="row">
                  <div class="col-sm-6 col-md-6">
                    <div class="form-group">
                      <label class="form-label">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        :value="user.firstname"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="form-group">
                      <label class="form-label">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        :value="user.lastname"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="form-group">
                      <label class="form-label">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        :value="user.email"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="form-group">
                      <label class="form-label">Phone Number</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Number"
                        :value="user.phone"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="form-label">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Home Address"
                        :value="user.address"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-0">
                      <label class="form-label">Upload Image</label>
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          name="example-file-input-custom"
                        />
                        <label class="custom-file-label">Choose file</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button type="submit" class="btn btn-primary">
                Updated Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/User Dashboard-->
</template>

<script>
import sidebar from "@/components/Sidebar";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    sidebar
  },
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    ...mapActions("auth", ["updateUser"]),
    setUpdateUser(user) {
      this.updateUser(user);
    }
  }
};
</script>

<style></style>
