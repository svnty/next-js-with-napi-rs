use napi_derive::napi;

#[napi]
pub fn hello(name: String) -> String {
    format!("Hello {}", name)
}

#[napi]
pub fn bye() -> String {
    format!("Goodbye")
}
