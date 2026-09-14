import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Database Connected')
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    process.exit(1)  // stop server if DB connection fails
  }
}

export default connectDB