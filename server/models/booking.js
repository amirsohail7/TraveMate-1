import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    serviceType: {
      type: String,
      required: true,
      enum: ["Restaurant", "Hotel", "Tour"],
    },

    service: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "serviceType",
    },

    traveler: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Traveler",
      required: true,
    },

    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
    },
    paymentType: {
      type: String,
    },

    paymentStatus: {
      type: String,
      default: "pending",
    },

    bookingStatus: {
      type: String,
    },

    dfrom: {
      type: Date,
    },

    dto: {
      type: Date,
    },

    time: {
      type: String,
    },

    seats: {
      type: Number,
      default: 1,
    },
    description: {
      type: String,
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
