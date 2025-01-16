import { Stack } from 'expo-router'

export default function AdminLayout() {
    return (
        <Stack screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#960669',
            },
            headerTintColor: '#ffffff',
        }}>
            {/* เส้นทางย่อยสำหรับ admin */}
            <Stack.Screen name="user/[id]" options={{ title: 'UserByID' }} />
            <Stack.Screen name="user/profile" options={{ title: 'UserProfile' }} />
        </Stack>
    )
}