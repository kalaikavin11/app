Button sumbit;
submit=findViewById(R.id.button);
submit.setOnClickListener(new View.OnClickListener(){
public void onClick(View V){
Intent intent=new Intent(MainActivity.this,Secondpage.class);
startActivity(intent);
}
