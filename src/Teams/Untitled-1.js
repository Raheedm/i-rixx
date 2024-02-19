<Container>
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
          <Grid container spacing={{ lg: 10, xs: 4 }}>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Representative Name"
                placeholder="Representative Name"
                value={representativeName}
                onChange={(e) => setRepresentativeName(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Roll Number"
                placeholder="Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Year"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Course"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Total Team Members"
                placeholder="Total Team Members"
                value={totalTeamMembers}
                onChange={(e) => setTotalTeamMembers(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                type="file"
                label="Upload ID Card Image"
                onChange={(e) => setIdCardImage(e.target.files[0])}
              />
            </Grid>
          </Grid>
          <div
            style={{
              margin: '3.5rem 0 1.8rem 0',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button type="submit">Register Team</Button>
          </div>
        </form>
      </Container>